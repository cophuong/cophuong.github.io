(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Learn\Phuong\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Phuong';
    }
    ngOnInit() {
        const divContent = document.getElementsByClassName('timeline-item');
        document.body.style.backgroundImage = "url(./../assets/img0.jpg)";
        setTimeout(() => {
            var _a;
            (_a = divContent.item(0)) === null || _a === void 0 ? void 0 : _a.classList.add("timeline-item--active");
        }, 1500);
    }
    onScroll(event) {
        var _a, _b, _c;
        const divContent = document.getElementsByClassName('timeline-item');
        let activeIndex = 0;
        let scrollTop = event.target.scrollingElement.scrollTop;
        if (scrollTop < 700) {
            activeIndex = 0;
        }
        else if (scrollTop < 1100) {
            activeIndex = 1;
        }
        else if (scrollTop < 1500) {
            activeIndex = 2;
        }
        else if (scrollTop < 2100) {
            activeIndex = 3;
        }
        else if (scrollTop < 2600) {
            activeIndex = 4;
        }
        else if (scrollTop < 3400) {
            activeIndex = 5;
        }
        else if (scrollTop < 3700) {
            activeIndex = 6;
        }
        else if (scrollTop < 4100) {
            activeIndex = 7;
        }
        else if (scrollTop < 4900) {
            activeIndex = 8;
        }
        else if (scrollTop < 5600) {
            activeIndex = 9;
        }
        else if (scrollTop < 6000) {
            activeIndex = 10;
        }
        else {
            activeIndex = 11;
        }
        console.log(activeIndex);
        console.log(scrollTop);
        document.body.style.backgroundImage = "url(./../assets/img" + activeIndex.toString() + ".jpg)";
        (_a = divContent.item(activeIndex)) === null || _a === void 0 ? void 0 : _a.classList.add("timeline-item--active");
        (_b = divContent.item(activeIndex - 1)) === null || _b === void 0 ? void 0 : _b.classList.remove("timeline-item--active");
        (_c = divContent.item(activeIndex + 1)) === null || _c === void 0 ? void 0 : _c.classList.remove("timeline-item--active");
    }
    yup() {
        confirm('Web đang cùi lắm cô ạ! Nói cho cháu đi cháu ngồi kế bên này 😁😁😁! Nghe nhạc Sếp đi he 😁 Cứ ôm anh đi ôm anh đi ôm anh đi ôm trong cơn mơ....');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 108, vars: 0, consts: [["role", "banner", 1, "toolbar"], [1, "spacer"], ["role", "main", 1, "content", 3, "onscroll"], ["id", "timeline-1", 1, "timeline-container"], [1, "timeline-header"], [1, "timeline-header__title"], [1, "timeline-header__subtitle"], [1, "timeline"], ["data-text", "\uD83D\uDC95\uD83D\uDC95\uD83D\uDC95", 1, "timeline-item"], [1, "timeline__content"], ["src", "../assets/img0.jpg", 1, "timeline__img"], [1, "timeline__content-desc"], ["data-text", "THE FRIST TIME WE MEET", 1, "timeline-item"], ["src", "../assets/img1.jpg", 1, "timeline__img"], [1, "timeline__content-title"], ["data-text", "Qu\u1EADn 2 khu g\u00EC lala n\u00E8", 1, "timeline-item"], ["src", "../assets/img2.jpg", 1, "timeline__img"], ["data-text", "\u00C1... con \u0111u\u00F4ng d\u1EEBa n\u00E8 haha", 1, "timeline-item"], ["src", "../assets/img3.jpg", 1, "timeline__img"], ["data-text", "B\u1EBEN B\u1EA0CH \u0110\u1EB0NG", 1, "timeline-item"], ["src", "../assets/img4.jpg", 1, "timeline__img"], ["data-text", "FRIST DATE N\u00E8 h\u00EC h\u00EC", 1, "timeline-item"], ["src", "../assets/img5.jpg", 1, "timeline__img"], ["data-text", "\u0110\u1EB9p he", 1, "timeline-item"], ["src", "../assets/img6.jpg", 1, "timeline__img"], ["data-text", "BEAUTIFUL NIGHT", 1, "timeline-item"], ["src", "../assets/img7.jpg", 1, "timeline__img"], ["data-text", "D\u1EC5 th\u01B0\u01A1ng qu\u00E1 n\u00E8", 1, "timeline-item"], ["src", "../assets/img8.jpg", 1, "timeline__img"], ["data-text", "I see a 'monkey' \uD83E\uDD23\uD83E\uDD23\uD83E\uDD23", 1, "timeline-item"], ["src", "../assets/img9.jpg", 1, "timeline__img"], ["data-text", "Water Bus", 1, "timeline-item"], ["src", "../assets/img10.jpg", 1, "timeline__img"], ["data-text", "I LOVE YOU\uD83D\uDC95\uD83D\uDC95\uD83D\uDC95", 1, "timeline-item"], ["src", "../assets/img11.jpg", 1, "timeline__img"], ["src", "./../assets/nangtho.mp3", "autoplay", ""], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"] `./../assets/nangtho.mp3`, "width", "180", "height", "90", "hidden", "true"], ["href", "https://www.youtube.com/watch?v=xypzmu5mMPY&ab_channel=S%C6%A1nT%C3%B9ngM-TPOfficial", "target", "_blank", "rel", "noopener", 3, "click"], [1, "github-star-badge"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi C\u00F4 Ph\u01B0\u01A1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onscroll", function AppComponent_Template_div_onscroll_4_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi........ C\u00F4 Ph\u01B0\u01A1ng\uD83D\uDE01\uD83D\uDE01\uD83D\uDC95! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C\u00F4 \u0103n c\u01A1m ch\u01B0a \uD83D\uDE01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hiazzz!!! Nh\u00ECn c\u00E1i h\u00ECnh n\u00E0y th\u00F4i l\u00E0 ch\u00E1u b\u1ECB ch\u1EBFt \u0111u\u1ED1i trong c\u00E1i s\u1EF1 d\u1EC5 th\u01B0\u01A1ng c\u1EE7a c\u00F4 r\u1ED3i \u00E1! Th\u1EC1 lu\u00F4n! Nh\u01B0ng m\u00E0 h\u00EAn qu\u00E1... Ch\u00E1u bi\u1EBFt b\u01A1i \uD83D\uDE0A\uD83D\uDE0A\uD83D\uDE0A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 16/01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "B\u1EEFa nay l\u00E0 g\u1EB7p l\u1EA7n \u0111\u1EA7u ha. \u0110\u01B0\u1EE3c c\u00E1i d\u1EC5 tin ng\u01B0\u1EDDi n\u00EAn ch\u1ECB Hi\u1EBFu k\u00EAu c\u00F4 86 c\u0169ng tin lu\u00F4n \uD83D\uDE01\uD83D\uDE01\uD83D\uDE01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "28/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " C\u00F4 n\u00E0y! M\u1ED7i m\u00E0 c\u00F4 c\u01B0\u1EDDi c\u00E1i r\u1ED3i nh\u00ECn v\u00E0o m\u1EAFt ch\u00E1u \u00E1... Hum... R\u1EE5ng tim cmnr... haizzz\uD83D\uDE0A\uD83D\uDE0A\uD83D\uDE0A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "22/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0110\u00F9a v\u1EADy th\u00F4i ch\u1EE9 ch\u00E1u th\u1EA5y \u0111\u1EB9p m\u00E0 he sao c\u00F4 l\u1EA1i b\u1EAFt x\u00F3a \u0111i z\u1EA1 \uD83D\uDE18\uD83D\uDE18\uD83D\uDE18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "28/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0110i ch\u1ED7 n\u00E0y c\u0169ng \u0111\u1EB9p he \uD83D\uDE02\uD83D\uDE02 Kinh nghi\u1EC7m kh\u00E1 \u00EDt n\u00EAn ch\u1EB3ng bi\u1EBFt d\u1EABn c\u00F4 \u0111i \u0111\u00E2u c\u1EA3 \uD83D\uDE01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "22/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sau b\u1EEFa n\u00E0y l\u00E0m ly c\u00E0 ph\u00EA th\u1EE9c c\u1EA3 \u0111\u00EAm kh\u00F4ng ng\u1EE7 nh\u1EC9. Ko ph\u1EA3i do cafe \u0111\u00E2u m\u00E0 do C\u00F4 c\u1EE9 ch\u1EA1y loanh quanh trong \u0111\u1EA7u \u00E1 n\u00EAn h\u00F4ng c\u00F3 ng\u1EE7 \u0111\u01B0\u1EE3c \u00E1 \uD83E\uDD37\u200D\u2642\uFE0F\uD83E\uDD37\u200D\u2642\uFE0F\uD83E\uDD37\u200D\u2642\uFE0F \u00C0....c\u00F2n b\u1ECBch h\u1EA1t d\u01B0a n\u00E0y n\u1EEFa ko c\u00F4 gi\u1EDD th\u00E8m \u0103n h\u1EA1t d\u01B0a \u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "7/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Ch\u1ED7 n\u00E0y \u0111\u1EB9p he M\u00ECnh \u0111i ti\u1EBFp \u0111i c\u00F4 \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09. B\u1EEFa n\u00E0o qua \u0111\u00E2y th\u1EA3 di\u1EC1u \u0111i. Chi\u1EBFc di\u1EC1u mua m\u1EDBi bay th\u1EED dc 2 b\u1EEFa haha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "28/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "C\u1EA7u \u00C1nh Sao n\u00E8. H\u00ECnh nh\u01B0 c\u00E1i b\u1EEFa n\u00E0y l\u00E0 ch\u1EA1y 1 v\u00F2ng S\u00E0i G\u00F2n lu\u00F4n \u00E1 nh\u1EC9 haha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "7/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u1EE6a ai m\u00E0 sao d\u1EC5 th\u01B0\u01A1ng qu\u00E1 z\u1ECB \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "6/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Nh\u00ECn c\u00F4 ng\u1ED3i c\u1EE9 g\u00E3i g\u00E3i m\u00E0 nh\u1ECBn c\u01B0\u1EDDi m\u1EC7t lu\u00F4n haha. Sau n\u00E0y u\u1ED1ng \u00EDt th\u00F4i nha c\u00F4 h\u00EC h\u00EC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "7/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "N\u1EBFu kh\u00F4ng nh\u1EA7m th\u00EC h\u1EB9n c\u00F4 \u0111i \u0111\u00E2u m\u00E0 mua v\u00E9 th\u00EC ph\u1EA3i m\u1EA5t 2 v\u00E9 tr\u01B0\u1EDBc r\u1ED3i ph\u1EA3i mua l\u1EA1i he\uD83D\uDE02. Ngh\u0129 l\u1EA1i th\u1EA5y ti\u1EBFc c\u00E1i v\u00E9 xem phim nh\u01B0ng m\u00E0 \u0111i ch\u01A1i v\u1EDBi c\u00F4 nhi\u1EC1u h\u01A1n ko sao acceptable\uD83E\uDD23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "28/02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Every time look at you I wonder: How can i \"T\u00E1n \u0111\u01B0\u1EE3c C\u00F4 nh\u1EC9\uD83D\uDE01\uD83D\uDE01\uD83D\uDE01\". B\u1EDFi v\u00EC c\u00F4 qu\u00E1 tuy\u1EC7t nh\u00ECn \u0111\u00E2u th\u00EC ch\u00E1u c\u0169ng duy\u1EC7t \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09. \u0110i\u1EC1u cu\u1ED1i c\u00F9ng ch\u00E1u mu\u1ED1n n\u00F3i l\u00E0 \"C\u00F4 \u01A1i! Anh y\u00EAu em\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "audio", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "If you are reading this, it is because your browser does not support the audio element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "embed", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Be my girlfriend say Yup\uD83D\uDE0B\uD83D\uDE0B\uD83D\uDE0A!\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_100_listener() { return ctx.yup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Yup\uD83D\uDE0B\uD83D\uDE0B\uD83D\uDE0A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Gray Clouds Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Cardo|Pathway+Gothic+One');\r\n .timeline[_ngcontent-%COMP%] {\r\n\t display: flex;\r\n\t margin: 0 auto;\r\n\t flex-wrap: wrap;\r\n\t flex-direction: column;\r\n\t max-width: 700px;\r\n\t position: relative;\r\n}\r\n .timeline__content-title[_ngcontent-%COMP%] {\r\n\t font-weight: normal;\r\n\t font-size: 66px;\r\n\t margin: -10px 0 0 0;\r\n\t transition: 0.4s;\r\n\t padding: 0 10px;\r\n\t box-sizing: border-box;\r\n\t font-family: 'Pathway Gothic One', sans-serif;\r\n\t color: #fff;\r\n}\r\n .timeline__content-desc[_ngcontent-%COMP%] {\r\n\t margin: 0;\r\n\t font-size: 15px;\r\n\t box-sizing: border-box;\r\n\t color: rgba(255, 255, 255, .7);\r\n\t font-family: Cardo;\r\n\t font-weight: normal;\r\n\t line-height: 25px;\r\n}\r\n .timeline[_ngcontent-%COMP%]:before {\r\n\t position: absolute;\r\n\t left: 50%;\r\n\t width: 2px;\r\n\t height: 100%;\r\n\t margin-left: -1px;\r\n\t content: \"\";\r\n\t background: rgba(255, 255, 255, .07);\r\n}\r\n @media only screen and (max-width: 767px) {\r\n\t .timeline[_ngcontent-%COMP%]:before {\r\n\t\t left: 40px;\r\n\t}\r\n}\r\n .timeline-item[_ngcontent-%COMP%] {\r\n\t padding: 40px 0;\r\n\t opacity: 0.3;\r\n\t filter: blur(2px);\r\n\t transition: 0.5s;\r\n\t box-sizing: border-box;\r\n\t width: calc(50% - 40px);\r\n\t display: flex;\r\n\t position: relative;\r\n\t transform: translateY(-80px);\r\n}\r\n .timeline-item[_ngcontent-%COMP%]:before {\r\n\t content: attr(data-text);\r\n\t letter-spacing: 3px;\r\n\t width: 100%;\r\n\t position: absolute;\r\n\t color: rgba(255, 255, 255, .5);\r\n\t font-size: 13px;\r\n\t font-family: 'Pathway Gothic One', sans-serif;\r\n\t border-left: 2px solid rgba(255, 255, 255, .5);\r\n\t top: 70%;\r\n\t margin-top: -5px;\r\n\t padding-left: 15px;\r\n\t opacity: 0;\r\n\t right: calc(-100% - 56px);\r\n}\r\n .timeline-item[_ngcontent-%COMP%]:nth-child(even) {\r\n\t align-self: flex-end;\r\n}\r\n .timeline-item[_ngcontent-%COMP%]:nth-child(even):before {\r\n\t right: auto;\r\n\t text-align: right;\r\n\t left: calc(-100% - 56px);\r\n\t padding-left: 0;\r\n\t border-left: none;\r\n\t border-right: 2px solid rgba(255, 255, 255, .5);\r\n\t padding-right: 15px;\r\n}\r\n .timeline-item--active[_ngcontent-%COMP%] {\r\n\t opacity: 1;\r\n\t transform: translateY(0);\r\n\t filter: blur(0px);\r\n}\r\n .timeline-item--active[_ngcontent-%COMP%]:before {\r\n\t top: 50%;\r\n\t transition: 0.3s all 0.2s;\r\n\t opacity: 1;\r\n}\r\n .timeline-item--active[_ngcontent-%COMP%]   .timeline__content-title[_ngcontent-%COMP%] {\r\n\t margin: -50px 0 20px 0;\r\n}\r\n @media only screen and (max-width: 767px) {\r\n\t .timeline-item[_ngcontent-%COMP%] {\r\n\t\t align-self: baseline !important;\r\n\t\t width: 100%;\r\n\t\t padding: 0 30px 150px 80px;\r\n\t}\r\n\t .timeline-item[_ngcontent-%COMP%]:before {\r\n\t\t left: 10px !important;\r\n\t\t padding: 0 !important;\r\n\t\t top: 50px;\r\n\t\t text-align: center !important;\r\n\t\t width: 60px;\r\n\t\t border: none !important;\r\n\t}\r\n\t .timeline-item[_ngcontent-%COMP%]:last-child {\r\n\t\t padding-bottom: 40px;\r\n\t}\r\n}\r\n .timeline__img[_ngcontent-%COMP%] {\r\n\t max-width: 100%;\r\n\t box-shadow: 0 10px 15px rgba(0, 0, 0, .4);\r\n}\r\n .timeline-container[_ngcontent-%COMP%] {\r\n\t width: 100%;\r\n\t position: relative;\r\n\t padding: 80px 0;\r\n\t transition: 0.3s ease 0s;\r\n\t background-attachment: fixed;\r\n\t background-size: cover;\r\n}\r\n .timeline-container[_ngcontent-%COMP%]:before {\r\n\t position: absolute;\r\n\t left: 0;\r\n\t top: 0;\r\n\t width: 100%;\r\n\t height: 100%;\r\n\t background: rgba(99, 99, 99, 0.8);\r\n\t content: \"\";\r\n}\r\n .timeline-header[_ngcontent-%COMP%] {\r\n\t width: 100%;\r\n\t text-align: center;\r\n\t margin-bottom: 80px;\r\n\t position: relative;\r\n}\r\n .timeline-header__title[_ngcontent-%COMP%] {\r\n\t color: #fff;\r\n\t font-size: 46px;\r\n\t font-family: Cardo;\r\n\t font-weight: normal;\r\n\t margin: 0;\r\n}\r\n .timeline-header__subtitle[_ngcontent-%COMP%] {\r\n\t color: rgba(255, 255, 255, .5);\r\n\t font-family: 'Pathway Gothic One', sans-serif;\r\n\t font-size: 16px;\r\n\t letter-spacing: 5px;\r\n\t margin: 10px 0 0 0;\r\n\t font-weight: normal;\r\n}\r\n .demo-footer[_ngcontent-%COMP%] {\r\n\t padding: 60px 0;\r\n\t text-align: center;\r\n}\r\n .demo-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t color: #999;\r\n\t display: inline-block;\r\n\t font-family: Cardo;\r\n}\r\n body[_ngcontent-%COMP%]{\r\n\tbackground-image: url('img0.jpg');;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtDQUM5RTtFQUNDLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7RUFDN0MsV0FBVztBQUNiO0NBQ0M7RUFDQyxTQUFTO0VBQ1QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG9DQUFvQztBQUN0QztDQUNDO0VBQ0M7R0FDQyxVQUFVO0NBQ1o7QUFDRDtDQUNDO0VBQ0MsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7Q0FDQztFQUNDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLDZDQUE2QztFQUM3Qyw4Q0FBOEM7RUFDOUMsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjtDQUNDO0VBQ0Msb0JBQW9CO0FBQ3RCO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLCtDQUErQztFQUMvQyxtQkFBbUI7QUFDckI7Q0FDQztFQUNDLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CO0NBQ0M7RUFDQyxRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtDQUNDO0VBQ0Msc0JBQXNCO0FBQ3hCO0NBQ0M7RUFDQztHQUNDLCtCQUErQjtHQUMvQixXQUFXO0dBQ1gsMEJBQTBCO0NBQzVCO0VBQ0M7R0FDQyxxQkFBcUI7R0FDckIscUJBQXFCO0dBQ3JCLFNBQVM7R0FDVCw2QkFBNkI7R0FDN0IsV0FBVztHQUNYLHVCQUF1QjtDQUN6QjtFQUNDO0dBQ0Msb0JBQW9CO0NBQ3RCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7Q0FDQztFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxXQUFXO0FBQ2I7Q0FDQztFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtDQUNDO0VBQ0MsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtDQUNDO0VBQ0MsOEJBQThCO0VBQzlCLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7Q0FDQztFQUNDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7Q0FDQztFQUNDLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0NBR0E7Q0FDQyxpQ0FBNkM7QUFDOUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhcmRvfFBhdGh3YXkrR290aGljK09uZScpO1xyXG4gLnRpbWVsaW5lIHtcclxuXHQgZGlzcGxheTogZmxleDtcclxuXHQgbWFyZ2luOiAwIGF1dG87XHJcblx0IGZsZXgtd3JhcDogd3JhcDtcclxuXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQgbWF4LXdpZHRoOiA3MDBweDtcclxuXHQgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAudGltZWxpbmVfX2NvbnRlbnQtdGl0bGUge1xyXG5cdCBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdCBmb250LXNpemU6IDY2cHg7XHJcblx0IG1hcmdpbjogLTEwcHggMCAwIDA7XHJcblx0IHRyYW5zaXRpb246IDAuNHM7XHJcblx0IHBhZGRpbmc6IDAgMTBweDtcclxuXHQgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG5cdCBjb2xvcjogI2ZmZjtcclxufVxyXG4gLnRpbWVsaW5lX19jb250ZW50LWRlc2Mge1xyXG5cdCBtYXJnaW46IDA7XHJcblx0IGZvbnQtc2l6ZTogMTVweDtcclxuXHQgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpO1xyXG5cdCBmb250LWZhbWlseTogQ2FyZG87XHJcblx0IGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0IGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcbiAudGltZWxpbmU6YmVmb3JlIHtcclxuXHQgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCBsZWZ0OiA1MCU7XHJcblx0IHdpZHRoOiAycHg7XHJcblx0IGhlaWdodDogMTAwJTtcclxuXHQgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcblx0IGNvbnRlbnQ6IFwiXCI7XHJcblx0IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA3KTtcclxufVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdCAudGltZWxpbmU6YmVmb3JlIHtcclxuXHRcdCBsZWZ0OiA0MHB4O1xyXG5cdH1cclxufVxyXG4gLnRpbWVsaW5lLWl0ZW0ge1xyXG5cdCBwYWRkaW5nOiA0MHB4IDA7XHJcblx0IG9wYWNpdHk6IDAuMztcclxuXHQgZmlsdGVyOiBibHVyKDJweCk7XHJcblx0IHRyYW5zaXRpb246IDAuNXM7XHJcblx0IGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0IHdpZHRoOiBjYWxjKDUwJSAtIDQwcHgpO1xyXG5cdCBkaXNwbGF5OiBmbGV4O1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODBweCk7XHJcbn1cclxuIC50aW1lbGluZS1pdGVtOmJlZm9yZSB7XHJcblx0IGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuXHQgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuXHQgd2lkdGg6IDEwMCU7XHJcblx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG5cdCBmb250LXNpemU6IDEzcHg7XHJcblx0IGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuXHQgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuXHQgdG9wOiA3MCU7XHJcblx0IG1hcmdpbi10b3A6IC01cHg7XHJcblx0IHBhZGRpbmctbGVmdDogMTVweDtcclxuXHQgb3BhY2l0eTogMDtcclxuXHQgcmlnaHQ6IGNhbGMoLTEwMCUgLSA1NnB4KTtcclxufVxyXG4gLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcclxuXHQgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuIC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKTpiZWZvcmUge1xyXG5cdCByaWdodDogYXV0bztcclxuXHQgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0IGxlZnQ6IGNhbGMoLTEwMCUgLSA1NnB4KTtcclxuXHQgcGFkZGluZy1sZWZ0OiAwO1xyXG5cdCBib3JkZXItbGVmdDogbm9uZTtcclxuXHQgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcblx0IHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuIC50aW1lbGluZS1pdGVtLS1hY3RpdmUge1xyXG5cdCBvcGFjaXR5OiAxO1xyXG5cdCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0IGZpbHRlcjogYmx1cigwcHgpO1xyXG59XHJcbiAudGltZWxpbmUtaXRlbS0tYWN0aXZlOmJlZm9yZSB7XHJcblx0IHRvcDogNTAlO1xyXG5cdCB0cmFuc2l0aW9uOiAwLjNzIGFsbCAwLjJzO1xyXG5cdCBvcGFjaXR5OiAxO1xyXG59XHJcbiAudGltZWxpbmUtaXRlbS0tYWN0aXZlIC50aW1lbGluZV9fY29udGVudC10aXRsZSB7XHJcblx0IG1hcmdpbjogLTUwcHggMCAyMHB4IDA7XHJcbn1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQgLnRpbWVsaW5lLWl0ZW0ge1xyXG5cdFx0IGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XHJcblx0XHQgd2lkdGg6IDEwMCU7XHJcblx0XHQgcGFkZGluZzogMCAzMHB4IDE1MHB4IDgwcHg7XHJcblx0fVxyXG5cdCAudGltZWxpbmUtaXRlbTpiZWZvcmUge1xyXG5cdFx0IGxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuXHRcdCBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0XHQgdG9wOiA1MHB4O1xyXG5cdFx0IHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0IHdpZHRoOiA2MHB4O1xyXG5cdFx0IGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQgLnRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCB7XHJcblx0XHQgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcblx0fVxyXG59XHJcbiAudGltZWxpbmVfX2ltZyB7XHJcblx0IG1heC13aWR0aDogMTAwJTtcclxuXHQgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNCk7XHJcbn1cclxuIC50aW1lbGluZS1jb250YWluZXIge1xyXG5cdCB3aWR0aDogMTAwJTtcclxuXHQgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCBwYWRkaW5nOiA4MHB4IDA7XHJcblx0IHRyYW5zaXRpb246IDAuM3MgZWFzZSAwcztcclxuXHQgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHQgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4gLnRpbWVsaW5lLWNvbnRhaW5lcjpiZWZvcmUge1xyXG5cdCBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0IGxlZnQ6IDA7XHJcblx0IHRvcDogMDtcclxuXHQgd2lkdGg6IDEwMCU7XHJcblx0IGhlaWdodDogMTAwJTtcclxuXHQgYmFja2dyb3VuZDogcmdiYSg5OSwgOTksIDk5LCAwLjgpO1xyXG5cdCBjb250ZW50OiBcIlwiO1xyXG59XHJcbiAudGltZWxpbmUtaGVhZGVyIHtcclxuXHQgd2lkdGg6IDEwMCU7XHJcblx0IHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHQgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAudGltZWxpbmUtaGVhZGVyX190aXRsZSB7XHJcblx0IGNvbG9yOiAjZmZmO1xyXG5cdCBmb250LXNpemU6IDQ2cHg7XHJcblx0IGZvbnQtZmFtaWx5OiBDYXJkbztcclxuXHQgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHQgbWFyZ2luOiAwO1xyXG59XHJcbiAudGltZWxpbmUtaGVhZGVyX19zdWJ0aXRsZSB7XHJcblx0IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuXHQgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG5cdCBmb250LXNpemU6IDE2cHg7XHJcblx0IGxldHRlci1zcGFjaW5nOiA1cHg7XHJcblx0IG1hcmdpbjogMTBweCAwIDAgMDtcclxuXHQgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4gLmRlbW8tZm9vdGVyIHtcclxuXHQgcGFkZGluZzogNjBweCAwO1xyXG5cdCB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIC5kZW1vLWZvb3RlciBhIHtcclxuXHQgY29sb3I6ICM5OTk7XHJcblx0IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgZm9udC1mYW1pbHk6IENhcmRvO1xyXG59XHJcbiBcclxuXHJcbmJvZHl7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi9hc3NldHMvaW1nMC5qcGdcIik7O1xyXG59XHJcblxyXG4iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map