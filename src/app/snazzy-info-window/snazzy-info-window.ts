import { AgmMarker, GoogleMapsAPIWrapper, MapsAPILoader, MarkerManager } from '@agm/core';
import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Host, Input, OnChanges, OnDestroy, Optional, Output, SimpleChanges, SkipSelf, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

declare var require: any;

@Component({
  selector: 'agm-snazzy-info-window',
  template: '<div #outerWrapper><div #viewContainer></div></div><ng-content></ng-content>',
})
export class AgmSnazzyInfoWindow implements AfterViewInit, OnDestroy, OnChanges {
 
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() isOpen = false;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() maxWidth: number | string = 200;
  @Input() maxHeight: number | string = 200;
  @Input() backgroundColor: string;
  @Input() padding: string;
  @Input() border: {width: string; color: string} | boolean;
  @Input() borderRadius: string;
  @Input() fontColor: string;
  @Input() fontSize: string;
  @Input() pointer: string | boolean;
  @Input() shadow: boolean | {h?: string, v?: string, blur: string, spread: string, opacity: number, color: string};
  @Input() openOnMarkerClick = true;
  @Input() closeOnMapClick = true;
  @Input() wrapperClass: string;
  @Input() closeWhenOthersOpen = false;
  @Input() showCloseButton = true;
  @Input() panOnOpen = true;
  @Output() beforeOpen: EventEmitter<void> = new EventEmitter<void>();
  @Output() afterClose: EventEmitter<void> = new EventEmitter<void>();

  
  @ViewChild('outerWrapper', {read: ElementRef, static: false}) _outerWrapper: ElementRef;

  @ViewChild('viewContainer', {read: ViewContainerRef, static: false}) _viewContainerRef: ViewContainerRef;

  @ContentChild(TemplateRef, {static: false}) _templateRef: TemplateRef<any>;

  protected _nativeSnazzyInfoWindow: any;
  protected _snazzyInfoWindowInitialized: Promise<any> | null = null;

  constructor(
    @Optional() @Host() @SkipSelf() private _marker: AgmMarker,
    private _wrapper: GoogleMapsAPIWrapper,
    private _manager: MarkerManager,
    private _loader: MapsAPILoader,
  ) {}


  ngOnChanges(changes: SimpleChanges) {
    if (this._nativeSnazzyInfoWindow == null) {
      return;
    }
    if ('isOpen' in changes && this.isOpen) {
      this._openInfoWindow();
    } else if ('isOpen' in changes && !this.isOpen) {
      this._closeInfoWindow();
    }
    if (('latitude' in changes || 'longitude' in changes) && this._marker == null) {
      this._updatePosition();
    }
  }

  ngAfterViewInit() {
    const m = this._manager != null ? this._manager.getNativeMarker(this._marker) : null;
    this._snazzyInfoWindowInitialized = this._loader.load()
      .then(() => require('snazzy-info-window'))
      .then((module: any) => Promise.all([module, m, this._wrapper.getNativeMap()]))
      .then((elems) => {
        const options: any = {
          map: elems[2],
          content: '',
          placement: this.placement,
          maxWidth: this.maxWidth,
          maxHeight: this.maxHeight,
          backgroundColor: this.backgroundColor,
          padding: this.padding,
          border: this.border,
          borderRadius: this.borderRadius,
          fontColor: this.fontColor,
          pointer: this.pointer,
          shadow: this.shadow,
          closeOnMapClick: this.closeOnMapClick,
          openOnMarkerClick: this.openOnMarkerClick,
          closeWhenOthersOpen: this.closeWhenOthersOpen,
          showCloseButton: this.showCloseButton,
          panOnOpen: this.panOnOpen,
          wrapperClass: this.wrapperClass,
          callbacks: {
            beforeOpen: () => {
              this._createViewContent();
              this.beforeOpen.emit();
            },
            afterOpen: () => {
              this.isOpenChange.emit(this.openStatus());
            },
            afterClose: () => {
              this.afterClose.emit();
              this.isOpenChange.emit(this.openStatus());
            },
          },
        };
        if (elems[1] != null) {
          options.marker = elems[1];
        } else {
          options.position = {
            lat: this.latitude,
            lng: this.longitude,
          };
        }
        this._nativeSnazzyInfoWindow = new elems[0](options);
      });
      this._snazzyInfoWindowInitialized.then(() => {
        if (this.isOpen) {
          this._openInfoWindow();
        }
      });
  }

  protected _openInfoWindow() {
    this._snazzyInfoWindowInitialized.then(() => {
      this._createViewContent();
      this._nativeSnazzyInfoWindow.open();
    });
  }

  protected _closeInfoWindow() {
    this._snazzyInfoWindowInitialized.then(() => {
      this._nativeSnazzyInfoWindow.close();
    });
  }

  protected _createViewContent() {
    if (this._viewContainerRef.length === 1) {
      return;
    }
    const evr = this._viewContainerRef.createEmbeddedView(this._templateRef);
    this._nativeSnazzyInfoWindow.setContent(this._outerWrapper.nativeElement);
    setTimeout(() => {
      evr.detectChanges();
    });
  }

  protected _updatePosition() {
    this._nativeSnazzyInfoWindow.setPosition({
      lat: this.latitude,
      lng: this.longitude,
    });
  }

  openStatus(): boolean {
    return this._nativeSnazzyInfoWindow && this._nativeSnazzyInfoWindow.isOpen();
  }

  ngOnDestroy() {
    if (this._nativeSnazzyInfoWindow) {
      this._nativeSnazzyInfoWindow.destroy();
    }
  }
}