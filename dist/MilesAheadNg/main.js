(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"introduction\">\n      <div class=\"schoolName\">\n          Miles Ahead Music\n      </div>\n      <!-- <div class=\"vidHeader\">\n        Introduction Video\n      </div>\n      <div class=\"aboutVid\">\n        <video autobuffer playsinline id=\"aboutUsVid\" [muted]=\"false\" controls>\n            <source src=\"../../assets/site-media/Miles Ahead Music Draft 2.mp4\">\n        </video>\n      </div> -->\n      <div class=\"introText\">\n          Our experienced staff members teach private music lessons and provide many performance \n          opportunities through jazz combos, vocal quartets and chamber groups. Our teachers are \n          all extremely qualified, having received or are about to receive degrees in music. Some \n          have masters degrees in music as well. We offer high quality lessons for an affordable \n          price so that students can grow miles ahead from the get go.\n      </div>\n  </div>\n  <div class=\"topic\" id=\"whatWeTeach\">\n      <div class=\"icon\">\n          \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              What We Teach\n          </div>\n          <div class=\"text\">\n              Whether you want to learn works by Beethoven or the Beatles, church hymns or AC/DC hits \n              you’ve come to the right place! Our teachers are all versatile, mastering genres such as: \n              classical, pop, jazz, rock, indie and more. We realize that every student is different \n              and want to help you become what YOU want to become!\n          </div>\n      </div>\n  </div>\n  <div class=\"topic\" id=\"easyForParents\">\n      <div class=\"icon\">\n  \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              We Make it Easy For Parents\n          </div>\n          <div class=\"text\">\n              We strive to help busy parents have an easy way to get their kids involved in music by \n              choosing great teachers and making scheduling easy. We know how hard it is to find the best \n              teacher at a reasonable price, so we hand picked the best around just for you!\n          </div>\n      </div>\n  </div>\n  <div class=\"topic\" id=\"teachers\">\n      <div class=\"icon\">\n  \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              Truly Qualified Teachers\n          </div>\n          <div class=\"text\">\n              All of our teachers are currently pursuing degrees in music or have already received degrees \n              in music. All of them are also active in professional music careers locally and globally. Our \n              teachers have played in Dubai, the Philippines, China, Australia, Thailand, and all over Europe, \n              North and South America! They have shared stages with Kelly Clarkson, Journey, Leann Rimes, \n              Neon Trees and countless jazz and classical legends. Many are in popular bands like the Strike \n              and Speirs. Many play regularly in classical,jazz, pop, or party groups for local events as well.\n          </div>\n      </div>\n  </div>\n  <div class=\"topic\" id=\"community\">\n      <div class=\"icon\">\n      \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              We Support the Community\n          </div>\n          <div class=\"text\">\n              As musicians, we know how hard it is to be successful entrepreneurs and we want to help our \n              local community grow. In order to showcase our local talent we sell local art and promote \n              local businesses.\n          </div>\n      </div>\n  </div>\n  <app-footer-bar></app-footer-bar>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.less":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  position: absolute;\n  top: 100px;\n  z-index: 2;\n}\n.content .introduction {\n  width: 100%;\n}\n.content .introduction .schoolName {\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 50px;\n  font-size: 40px;\n  font-family: 'Julius Sans One', sans-serif;\n}\n.content .introduction .vidHeader {\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 20px;\n}\n.content .introduction .aboutVid {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n@media screen and (min-width: 500px) {\n  .content .introduction .aboutVid {\n    margin-bottom: 50px;\n  }\n}\n.content .introduction .aboutVid #aboutUsVid {\n  width: 300px;\n}\n@media screen and (min-width: 500px) {\n  .content .introduction .aboutVid #aboutUsVid {\n    width: 400px;\n  }\n}\n.content .introduction .introText {\n  margin: 0 auto;\n  width: 90%;\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 40px;\n  font-family: \"Quicksand\", sans-serif;\n}\n.content .topic {\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .topic .icon {\n  height: 50px;\n  width: 50px;\n  margin-right: 30px;\n  margin-left: 20px;\n}\n.content .topic .info {\n  width: calc((100%/3)*2);\n}\n.content .topic .info .head {\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n}\n.content .topic .info .text {\n  font-family: \"Quicksand\", sans-serif;\n  margin-right: 30px;\n}\n.content #whatWeTeach .icon {\n  background-image: url('bookIcon.png');\n  background-size: cover;\n}\n.content #easyForParents .icon {\n  background-image: url('vanIcon.png');\n  background-size: cover;\n}\n.content #teachers .icon {\n  background-image: url('capIcon.png');\n  background-size: cover;\n}\n.content #community .icon {\n  background-image: url('commIcon.png');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtDQ0NIO0FETEQ7RUFPUSxZQUFBO0NDQ1A7QURSRDtFQVVZLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7Q0NDWDtBRGhCRDtFQWtCWSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQ0NYO0FEdEJEO0VBd0JZLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtDQ0NYO0FEQVc7RUFBQTtJQUNJLG9CQUFBO0dDR2I7Q0FDRjtBRG5DRDtFQW1DZ0IsYUFBQTtDQ0dmO0FERmU7RUFBQTtJQUNJLGFBQUE7R0NLakI7Q0FDRjtBRDNDRDtFQTBDWSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0NDSVg7QURuREQ7RUFtRFEsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtDQ0dQO0FEM0REO0VBMkRZLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtDQ0dYO0FEakVEO0VBaUVZLHdCQUFBO0NDR1g7QURwRUQ7RUFvRWdCLDJDQUFBO0VBQ0EsZ0JBQUE7Q0NHZjtBRHhFRDtFQXdFZ0IscUNBQUE7RUFDQSxtQkFBQTtDQ0dmO0FENUVEO0VBK0VZLHNDQUFBO0VBQ0EsdUJBQUE7Q0NBWDtBRGhGRDtFQXFGWSxxQ0FBQTtFQUNBLHVCQUFBO0NDRlg7QURwRkQ7RUEyRlkscUNBQUE7RUFDQSx1QkFBQTtDQ0pYO0FEeEZEO0VBaUdZLHNDQUFBO0VBQ0EsdUJBQUE7Q0NOWCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIFxuICAgICAgICAuc2Nob29sTmFtZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAudmlkSGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0VmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNhYm91dFVzVmlkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50b3BpYyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgd2lkdGg6IH5cImNhbGMoKDEwMCUvMykqMilcIjtcblxuICAgICAgICAgICAgLmhlYWQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICN3aGF0V2VUZWFjaCB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2Jvb2tJY29uLnBuZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2Vhc3lGb3JQYXJlbnRzIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvdmFuSWNvbi5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgICN0ZWFjaGVycyB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2NhcEljb24ucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY29tbXVuaXR5IHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvY29tbUljb24ucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRlbnQgLmludHJvZHVjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQgLmludHJvZHVjdGlvbiAuc2Nob29sTmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbn1cbi5jb250ZW50IC5pbnRyb2R1Y3Rpb24gLnZpZEhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGVudCAuaW50cm9kdWN0aW9uIC5hYm91dFZpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC5pbnRyb2R1Y3Rpb24gLmFib3V0VmlkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG4uY29udGVudCAuaW50cm9kdWN0aW9uIC5hYm91dFZpZCAjYWJvdXRVc1ZpZCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC5pbnRyb2R1Y3Rpb24gLmFib3V0VmlkICNhYm91dFVzVmlkIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5pbnRyb2R1Y3Rpb24gLmludHJvVGV4dCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGVudCAudG9waWMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50IC50b3BpYyAuaWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uY29udGVudCAudG9waWMgLmluZm8ge1xuICB3aWR0aDogY2FsYygoMTAwJS8zKSoyKTtcbn1cbi5jb250ZW50IC50b3BpYyAuaW5mbyAuaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmNvbnRlbnQgLnRvcGljIC5pbmZvIC50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5jb250ZW50ICN3aGF0V2VUZWFjaCAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2Jvb2tJY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50ICNlYXN5Rm9yUGFyZW50cyAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3Zhbkljb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNvbnRlbnQgI3RlYWNoZXJzIC5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvY2FwSWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCAjY29tbXVuaXR5IC5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvY29tbUljb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.less */ "./src/app/about-us/about-us.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _lesson_info_lesson_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson-info/lesson-info.component */ "./src/app/lesson-info/lesson-info.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _covid_info_covid_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./covid-info/covid-info.component */ "./src/app/covid-info/covid-info.component.ts");








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
    { path: 'lesson-info', component: _lesson_info_lesson_info_component__WEBPACK_IMPORTED_MODULE_5__["LessonInfoComponent"] },
    { path: 'covid-info', component: _covid_info_covid_info_component__WEBPACK_IMPORTED_MODULE_7__["CovidInfoComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header-bar class=\"header\"></app-header-bar>\n<router-outlet class=\"router\"></router-outlet>\n<app-site-notices></app-site-notices>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  z-index: 1000;\n}\ndiv {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7Q0NDSDtBRENEO0VBQ0ksMEJBQUE7S0FBQSx1QkFBQTtNQUFBLHNCQUFBO1VBQUEsa0JBQUE7Q0NDSDtBRENEO0VBQ0ksY0FBQTtDQ0NIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbmRpdiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwiLmhlYWRlciB7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5kaXYge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.title = 'Miles Ahead Music';
        this.titleService.setTitle(this.title);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _lesson_info_lesson_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lesson-info/lesson-info.component */ "./src/app/lesson-info/lesson-info.component.ts");
/* harmony import */ var _teacher_display_teacher_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teacher-display/teacher-display.component */ "./src/app/teacher-display/teacher-display.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/header-bar/header-bar.component.ts");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/footer-bar/footer-bar.component.ts");
/* harmony import */ var _single_review_single_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-review/single-review.component */ "./src/app/single-review/single-review.component.ts");
/* harmony import */ var _covid_info_covid_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./covid-info/covid-info.component */ "./src/app/covid-info/covid-info.component.ts");
/* harmony import */ var _site_notices_site_notices_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./site-notices/site-notices.component */ "./src/app/site-notices/site-notices.component.ts");





var config = { url: 'https://milesaheadmusiclessons.com', options: {} };













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _lesson_info_lesson_info_component__WEBPACK_IMPORTED_MODULE_10__["LessonInfoComponent"],
                _teacher_display_teacher_display_component__WEBPACK_IMPORTED_MODULE_11__["TeacherDisplayComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_12__["ContactFormComponent"],
                _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_13__["HeaderBarComponent"],
                _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_14__["FooterBarComponent"],
                _single_review_single_review_component__WEBPACK_IMPORTED_MODULE_15__["SingleReviewComponent"],
                _covid_info_covid_info_component__WEBPACK_IMPORTED_MODULE_16__["CovidInfoComponent"],
                _site_notices_site_notices_component__WEBPACK_IMPORTED_MODULE_17__["SiteNoticesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(config)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"formView hidden\" id=\"contactForm\">\n  <div class=\"form\">\n    \n    <div class=\"formHeader\">\n      Contact Form\n    </div>\n    <div class=\"formExplain\">\n      Please fill out the form below, and a member of our staff will personally \n      reach out to you to answer any questions, get you a quote, or to help you \n      get enrolled!\n    </div>\n    <div class=\"parentName\">\n      <div>\n        First Name<br>\n        <div class=\"first\">\n          <input type=\"text\" [(ngModel)]=\"parentFirstName\" height=\"40\">\n        </div>\n        Last <br>\n        <div class=\"last\">\n          <input type=\"text\" [(ngModel)]=\"parentLastName\">\n        </div>\n      </div>\n    </div>\n    <div class=\"phone\">\n      Phone Number\n      <div class=\"phoneNumber\">\n        <input type=\"tel\" [(ngModel)]=\"phoneNum\">\n      </div>\n    </div>\n    <div class=\"email\">\n      Email\n      <div class=\"emailAddress\">\n        <input type=\"email\" [(ngModel)]=\"emailAddress\">\n      </div>\n    </div>\n    <div class=\"studentName\">\n      Student Name (if different)\n      <div>\n        First\n        <div class=\"first\">\n          <input type=\"text\" [(ngModel)]=\"studentFirstName\">\n        </div>\n        Last\n        <div class=\"last\">\n          <input type=\"text\" [(ngModel)]=\"studentLastName\">\n        </div>\n      </div>\n    </div>\n    <div class=\"instrument\">\n      Instrument\n      <div class=\"instrumentEntry\">\n        <input type=\"text\" [(ngModel)]=\"instrument\">\n      </div>\n    </div>\n    <div class=\"pleaseComplete hidden\" id=\"pleaseComplete\">\n      The form is missing information or has errors\n    </div>\n    <div class=\"formError hidden\" id=\"formError\">\n      There was an error submitting the form. Please try again, or email us directly at milesaheadmusicutah@gmail.com\n    </div>\n    <div class=\"actions\">\n      <div class=\"submitBtn\" (click)=\"submitForm()\">\n        SUBMIT\n      </div>\n      <div class=\"formStatus hidden\" id=\"formStatus\">\n        Submission successful\n      </div>\n      <div class=\"exitBtn\" (click)=\"hideForm()\">\n        X\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.less":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formView {\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 1001;\n  overflow: scroll;\n  display: flex;\n  justify-content: center;\n}\n.formView .form {\n  color: white;\n  font-family: \"Quicksand\", sans-serif;\n  padding: 20px;\n  font-size: 20px;\n}\n@media screen and (min-width: 500px) {\n  .formView .form {\n    width: 350px;\n    margin-top: 100px;\n  }\n}\n.formView .form input {\n  font-size: 20px;\n  margin: 2px;\n}\n.formView .form .formHeader {\n  width: 100%;\n  font-size: 60px;\n  font-family: \"Sacramento\", cursive;\n  text-align: center;\n}\n.formView .form .formExplain {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n.formView .form .pleaseComplete {\n  color: red;\n  text-shadow: 0 0 5px black;\n  margin-top: 10px;\n}\n.formView .form .formError {\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 5px;\n  background-color: rgba(255, 0, 0, 0.5);\n}\n.formView .form .actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding-bottom: 75px;\n}\n.formView .form .actions .submitBtn {\n  height: 50px;\n  width: 100px;\n  background-color: #1f1d1d;\n  border-radius: 5px;\n  box-shadow: 0 0 5px white, 0 0 5px green;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.formView .form .actions .formStatus {\n  height: 50px;\n  width: 150px;\n  background-color: lightgreen;\n  text-align: center;\n  border-radius: 5px;\n  text-shadow: 0 0 5px black;\n}\n.formView .form .actions .exitBtn {\n  font-size: 30px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0NDQ0g7QURURDtFQVdRLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtDQ0NQO0FEQU87RUFBQTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtHQ0dUO0NBQ0Y7QURyQkQ7RUFxQlksZ0JBQUE7RUFDQSxZQUFBO0NDR1g7QUR6QkQ7RUEwQlksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtDQ0VYO0FEL0JEO0VBZ0NZLG9CQUFBO0VBQ0EsZ0JBQUE7Q0NFWDtBRG5DRDtFQW9DWSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtDQ0VYO0FEeENEO0VBeUNZLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7Q0NFWDtBRDlDRDtFQStDWSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0NDRVg7QURwREQ7RUFxRGdCLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtDQ0VmO0FEL0REO0VBZ0VnQixhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0NDRWY7QUR2RUQ7RUF3RVksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0NDRVg7QURJRDtFQUNJLGNBQUE7Q0NGSCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybVZpZXcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC44NSk7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtSGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2FjcmFtZW50b1wiLCBjdXJzaXZlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtRXhwbGFpbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGVhc2VDb21wbGV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtRXJyb3Ige1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzVweDtcblxuICAgICAgICAgICAgLnN1Ym1pdEJ0biB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDI5LCAyOSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggd2hpdGUsIDAgMCA1cHggZ3JlZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtU3RhdHVzIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuZXhpdEJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxufVxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iLCIuZm9ybVZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICB6LWluZGV4OiAxMDAxO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtVmlldyAuZm9ybSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5mb3JtVmlldyAuZm9ybSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG59XG4uZm9ybVZpZXcgLmZvcm0gaW5wdXQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMnB4O1xufVxuLmZvcm1WaWV3IC5mb3JtIC5mb3JtSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2FjcmFtZW50b1wiLCBjdXJzaXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybVZpZXcgLmZvcm0gLmZvcm1FeHBsYWluIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm1WaWV3IC5mb3JtIC5wbGVhc2VDb21wbGV0ZSB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmZvcm1WaWV3IC5mb3JtIC5mb3JtRXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbn1cbi5mb3JtVmlldyAuZm9ybSAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XG59XG4uZm9ybVZpZXcgLmZvcm0gLmFjdGlvbnMgLnN1Ym1pdEJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZDFkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggd2hpdGUsIDAgMCA1cHggZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybVZpZXcgLmZvcm0gLmFjdGlvbnMgLmZvcm1TdGF0dXMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xufVxuLmZvcm1WaWV3IC5mb3JtIC5hY3Rpb25zIC5leGl0QnRuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server-link.service */ "./src/app/server-link.service.ts");

var hubspot;


var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(serverLink) {
        this.serverLink = serverLink;
        this.parentFirstName = "";
        this.parentLastName = "";
        this.phoneNum = "";
        this.emailAddress = "";
        this.studentFirstName = "";
        this.studentLastName = "";
        this.instrument = "";
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.hideForm = function () {
        document.getElementById('formStatus').classList.add('hidden');
        this.parentFirstName = "";
        this.parentLastName = "";
        this.phoneNum = "";
        this.emailAddress = "";
        this.studentFirstName = "";
        this.studentLastName = "";
        this.instrument = "";
        document.getElementById('contactForm').classList.add('hidden');
    };
    ContactFormComponent.prototype.submitForm = function () {
        if (this.parentFirstName.length > 0 && this.parentLastName.length > 0 && this.phoneNum.length > 9 &&
            this.emailAddress.includes('@') && this.instrument.length > 0) {
            this.serverLink.submitContactForm(this.parentFirstName, this.parentLastName, this.phoneNum, this.emailAddress, this.studentFirstName, this.studentLastName, this.instrument);
        }
        else {
            document.getElementById('pleaseComplete').classList.remove('hidden');
        }
    };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.less */ "./src/app/contact-form/contact-form.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_link_service__WEBPACK_IMPORTED_MODULE_2__["ServerLinkService"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"titleText\">\n      Feel Free to Reach Out!\n  </div>\n  <div class=\"infoSection\">\n      <!-- <div class=\"mapSection\">\n          <a href=\"https://goo.gl/maps/YYfR8mk82E93QJpCA\" target=\"_blank\">\n              <div class=\"mapDisplay\">\n                  <div>\n                      Care for a map?\n                  </div>\n              </div>\n          </a>\n      </div> -->\n      <div class=\"infoDetails\">\n          <div class=\"socialMedia\">\n            <a href=\"https://www.facebook.com/MilesAheadMusicUtah/\" target=\"_blank\">\n                <div class=\"fb\">\n\n                </div>\n            </a>\n            <a href=\"https://www.instagram.com/milesaheadmusiclessons/\" target=\"_blank\">\n                <div class=\"insta\">\n                    \n                </div>\n            </a>\n          </div>\n          <!-- <div class=\"address\">\n              <div class=\"addressIcon\"></div>\n              <div class=\"streetAddress\">\n                  343 E Main Street<br>American Fork, UT 84003\n              </div>\n          </div> -->\n          <div class=\"email\">\n              <div class=\"emailIcon\"></div>\n              <div class=\"emailAddress\">\n                  milesaheadmusicutah@gmail.com\n              </div>\n          </div>\n          <div class=\"phone\">\n              <div class=\"phoneIcon\"></div>\n              <div class=\"phoneNumber\">\n                  801-753-8056\n              </div>\n          </div>\n      </div>\n      <div class=\"formBtnSec\">\n          <div class=\"formBtn\" (click)=\"displayForm()\">\n              Contact Form\n          </div>\n      </div>\n      <div class=\"dropInTitle\">\n          Normal Business Hours\n      </div>\n      <div class=\"hoursSec\">\n          <!-- <div class=\"studioPic\"></div> -->\n          <div class=\"hoursInfo\">\n              Monday - Friday<br>\n              2:30pm - 8:30pm\n          </div>\n      </div>\n  </div>\n  <app-footer-bar></app-footer-bar>\n</div>\n<app-contact-form></app-contact-form>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.less":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  position: absolute;\n}\n.content .titleText {\n  height: 100px;\n  width: calc(100% - 40px);\n  padding: 20px;\n  margin-top: 150px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 40px;\n}\n@media screen and (min-width: 500px) {\n  .content .titleText {\n    margin-bottom: 0;\n  }\n}\n.content .infoSection {\n  width: 100%;\n  font-family: 'Quicksand', sans-serif;\n}\n.content .infoSection .mapSection {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .infoSection .mapSection .mapDisplay {\n  height: 200px;\n  width: 300px;\n  box-shadow: 0 0 10px black;\n  border-radius: 5px;\n  background-image: url('milesAheadMap.png');\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.2s;\n}\n@media screen and (min-width: 500px) {\n  .content .infoSection .mapSection .mapDisplay {\n    height: 250px;\n    width: 400px;\n  }\n}\n.content .infoSection .mapSection .mapDisplay:hover {\n  transform: scale(1.05);\n  transition: 0.2s;\n}\n.content .infoSection .mapSection .mapDisplay div {\n  color: white;\n  font-size: 20px;\n  text-decoration: none;\n  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 10px black;\n}\n.content .infoSection .mapSection a {\n  text-decoration: none;\n}\n.content .infoSection .infoDetails {\n  width: 100%;\n  font-size: 16px;\n  margin-top: 20px;\n}\n@media screen and (min-width: 500px) {\n  .content .infoSection .infoDetails {\n    margin-top: 50px;\n  }\n}\n.content .infoSection .infoDetails div {\n  margin: 10px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin-left: 20px;\n}\n@media screen and (min-width: 500px) {\n  .content .infoSection .infoDetails div {\n    justify-content: center;\n  }\n}\n.content .infoSection .infoDetails .socialMedia {\n  margin-bottom: 20px;\n}\n.content .infoSection .infoDetails .socialMedia div {\n  height: 50px;\n  width: 50px;\n  background-size: cover;\n  cursor: pointer;\n}\n.content .infoSection .infoDetails .socialMedia .fb {\n  background-image: url('fbLogo.png');\n}\n.content .infoSection .infoDetails .socialMedia .insta {\n  background-image: url('instaLogo.png');\n}\n.content .infoSection .infoDetails .address .addressIcon {\n  height: 50px;\n  width: 50px;\n  background-image: url('addressIcon.png');\n  background-size: cover;\n}\n.content .infoSection .infoDetails .address .streetAddress {\n  display: block;\n  width: 200px;\n}\n.content .infoSection .infoDetails .email .emailIcon {\n  height: 50px;\n  width: 50px;\n  background-image: url('emailIcon.png');\n  background-size: cover;\n}\n.content .infoSection .infoDetails .email .emailAddress {\n  display: block;\n  width: 200px;\n  font-size: 12px;\n}\n.content .infoSection .infoDetails .phone .phoneIcon {\n  height: 50px;\n  width: 50px;\n  background-image: url('phoneIcon.png');\n  background-size: cover;\n}\n.content .infoSection .infoDetails .phone .phoneNumber {\n  width: 200px;\n  display: block;\n}\n.content .infoSection .formBtnSec {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n}\n.content .infoSection .formBtnSec .formBtn {\n  height: 90px;\n  width: 250px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 45px;\n  color: white;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1f1d1d;\n  box-shadow: 0 0 5px black, 0 0 10px black;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.content .infoSection .formBtnSec .formBtn:hover {\n  transform: scale(1.05);\n  transition: 0.2s;\n}\n.content .infoSection .dropInTitle {\n  height: 50px;\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-size: 20px;\n  text-align: center;\n}\n.content .infoSection .hoursSec {\n  height: 300px;\n  width: 100%;\n  margin-bottom: 50px;\n}\n.content .infoSection .hoursSec .studioPic {\n  height: 150px;\n  width: 150px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background-image: url('studioPic2.jpg');\n  background-size: cover;\n}\n.content .infoSection .hoursSec .hoursInfo {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtDQ0NIO0FESEQ7RUFLUSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtDQ0NQO0FEQU87RUFBQTtJQUNJLGlCQUFBO0dDR1Q7Q0FDRjtBRGxCRDtFQWtCUSxZQUFBO0VBQ0EscUNBQUE7Q0NHUDtBRHRCRDtFQXNCWSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7Q0NHWDtBRDVCRDtFQTRCZ0IsY0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtDQ0dmO0FERmU7RUFBQTtJQUNJLGNBQUE7SUFDQSxhQUFBO0dDS2pCO0NBQ0Y7QURIZTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7Q0NLbkI7QURuREQ7RUFrRG9CLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMERBQUE7Q0NJbkI7QUR6REQ7RUEwRGdCLHNCQUFBO0NDRWY7QUQ1REQ7RUE4RFksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7Q0NDWDtBREFXO0VBQUE7SUFDSSxpQkFBQTtHQ0diO0NBQ0Y7QUR0RUQ7RUFzRWdCLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0NDR2Y7QURGZTtFQUFBO0lBQ0ksd0JBQUE7R0NLakI7Q0FDRjtBRGxGRDtFQWdGZ0Isb0JBQUE7Q0NLZjtBRHJGRDtFQW1Gb0IsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0NDS25CO0FEM0ZEO0VBeUZvQixvQ0FBQTtDQ0tuQjtBRDlGRDtFQTRGb0IsdUNBQUE7Q0NLbkI7QURqR0Q7RUFpR29CLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtDQ0duQjtBRHZHRDtFQXVHb0IsZUFBQTtFQUNBLGFBQUE7Q0NHbkI7QUQzR0Q7RUE2R29CLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtDQ0NuQjtBRGpIRDtFQW1Ib0IsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtDQ0NuQjtBRHRIRDtFQTBIb0IsYUFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0NDRG5CO0FENUhEO0VBZ0lvQixhQUFBO0VBQ0EsZUFBQTtDQ0RuQjtBRGhJRDtFQXNJWSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtDQ0hYO0FEeklEO0VBK0lnQixhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7Q0NIZjtBREtlO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtDQ0huQjtBRDdKRDtFQXFLWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtDQ0xYO0FEdEtEO0VBOEtZLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7Q0NMWDtBRDNLRDtFQW1MZ0IsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0NDTGY7QURuTEQ7RUEyTGdCLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7Q0NMZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAudGl0bGVUZXh0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IH5cImNhbGMoMTAwJSAtIDQwcHgpXCI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbmZvU2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgLm1hcFNlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAubWFwRGlzcGxheSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pbGVzQWhlYWRNYXAucG5nXCIpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5mb0RldGFpbHMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc29jaWFsTWVkaWEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mYiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9mYkxvZ28ucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluc3RhIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2luc3RhTG9nby5wbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgICAgICAuYWRkcmVzc0ljb24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvYWRkcmVzc0ljb24ucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0cmVldEFkZHJlc3Mge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgICAgICAgLmVtYWlsSWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9lbWFpbEljb24ucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVtYWlsQWRkcmVzcyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGhvbmUge1xuICAgICAgICAgICAgICAgIC5waG9uZUljb24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvcGhvbmVJY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5waG9uZU51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mb3JtQnRuU2VjIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG5cbiAgICAgICAgICAgIC5mb3JtQnRuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZHJvcEluVGl0bGUge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhvdXJzU2VjIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgICAgIC5zdHVkaW9QaWMge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3N0dWRpb1BpYzIuanBnJyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob3Vyc0luZm8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSIsIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50IC50aXRsZVRleHQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQgLnRpdGxlVGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAubWFwU2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAubWFwU2VjdGlvbiAubWFwRGlzcGxheSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWlsZXNBaGVhZE1hcC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAuaW5mb1NlY3Rpb24gLm1hcFNlY3Rpb24gLm1hcERpc3BsYXkge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLm1hcFNlY3Rpb24gLm1hcERpc3BsYXk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5tYXBTZWN0aW9uIC5tYXBEaXNwbGF5IGRpdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAwIDAgNXB4IGJsYWNrLCAwIDAgMTBweCBibGFjaztcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAubWFwU2VjdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAuaW5mb1NlY3Rpb24gLmluZm9EZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmluZm9EZXRhaWxzIGRpdiB7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMgZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAuc29jaWFsTWVkaWEge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAuc29jaWFsTWVkaWEgZGl2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAuc29jaWFsTWVkaWEgLmZiIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2ZiTG9nby5wbmcpO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAuc29jaWFsTWVkaWEgLmluc3RhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2luc3RhTG9nby5wbmcpO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAuYWRkcmVzcyAuYWRkcmVzc0ljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvYWRkcmVzc0ljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMgLmFkZHJlc3MgLnN0cmVldEFkZHJlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAuZW1haWwgLmVtYWlsSWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9lbWFpbEljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMgLmVtYWlsIC5lbWFpbEFkZHJlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmluZm9EZXRhaWxzIC5waG9uZSAucGhvbmVJY29uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3Bob25lSWNvbi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAucGhvbmUgLnBob25lTnVtYmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuZm9ybUJ0blNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmZvcm1CdG5TZWMgLmZvcm1CdG4ge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkMWQ7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmZvcm1CdG5TZWMgLmZvcm1CdG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5kcm9wSW5UaXRsZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5ob3Vyc1NlYyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5ob3Vyc1NlYyAuc3R1ZGlvUGljIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3N0dWRpb1BpYzIuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmhvdXJzU2VjIC5ob3Vyc0luZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.displayForm = function () {
        document.getElementById('contactForm').classList.remove('hidden');
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.less */ "./src/app/contact-us/contact-us.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/covid-info/covid-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/covid-info/covid-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"pageHead\">\n      Covid-19 Can't Stop the Music!\n    </div>\n    <div class=\"pageText\">\n      We have made many changes in response to COVID-19. Our \n      first priority is the safety of our students and teachers. \n      Because of this, we've decided to discontinue lessons at our physical location \n      and offer online and in-home lessons. In the beginning this \n      seemed unfortunate, as the physical location of Miles \n      Ahead Music was a beautiful community setting to our \n      teaching team and awesome student families. We will continue \n      to offer a “virtual community” through our online portal. \n      We are working on virtual recitals and other fun virtual \n      events to maintain and improve our community! We are excited \n      to offer physical events in the future! \n      <br>\n      <br>\n      With our new lesson formats we continue to make safety our number one \n      concern. Here are some details about our online and in-home lessons:\n    </div>\n    <div class=\"lessonHead\">\n      Online Lessons\n    </div>\n    <div class=\"lessonText\">\n      We have come up with an amazing online experience for students and \n      teachers. With our Online Portal, made to accommodate virtual lessons, \n      enjoy access to:\n      <ul>\n        <li>Weekly one-on-one live WebEx lessons with an extraordinary teacher</li>\n        <li>Interactive lessons schedule that can be integrated into your own calendar</li>\n        <li>Library of helpful tips and video tutorials</li>\n        <li>Payment information and history</li>\n        <li>Internal messaging system</li>\n        <li>Ability to upload virtual homework assignments (recordings of etudes, \n          scales, repertoire & more)</li>\n      </ul>\n    </div>\n    <div class=\"enrollBtn\" (click)=\"displayForm()\">\n      Get A Quote\n    </div>\n    <div class=\"lessonHead\">\n      In-Home Lessons*\n    </div>\n    <div class=\"lessonText\">\n      Ever wish there was such a thing as Uber for music lessons? We have \n      implemented the same technology to get our background checked teachers to \n      your home for music lessons! Enjoy our top-of-the-line teachers (really, our \n      teachers have studied Music Performance at universities including: Brigham \n      Young University, University of Utah, New York University, Utah State, Utah \n      Valley University and more)! You will have access to our Online Portal that \n      includes:\n      <ul>\n        <li>Interactive lessons schedule that can be integrated into your own calendar</li>\n        <li>Library of helpful tips and video tutorials</li>\n        <li>Payment information & history</li>\n        <li>Internal messaging system</li>\n        <li>Ability to upload virtual homework assignments (recordings of etudes, scales, \n          repertoire & more)</li>\n      </ul>\n    </div>\n    <div class=\"enrollBtn\" (click)=\"displayForm()\">\n      Get A Quote\n    </div>\n    <br>\n    <div class=\"lessonText\">\n      *We mandate a 6 feet apart rule, usage of hand sanitizer as well as masks for lessons \n      that can easily take place while wearing a mask. Our teachers and students will be \n      required to take their temperatures before giving or receiving lessons.\n    </div>\n    <br>\n    <br>\n  </div>\n</div>\n<app-contact-form></app-contact-form>\n"

/***/ }),

/***/ "./src/app/covid-info/covid-info.component.less":
/*!******************************************************!*\
  !*** ./src/app/covid-info/covid-info.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  position: absolute;\n  margin-top: 100px;\n  z-index: 1;\n}\n.container .content {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 50px;\n}\n@media screen and (min-width: 1000px) {\n  .container .content {\n    width: 60%;\n  }\n}\n.container .content .pageHead {\n  width: 100%;\n  text-align: center;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n}\n.container .content .pageText {\n  width: 100%;\n  margin-top: 25px;\n  text-align: center;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 20px;\n}\n.container .content .enrollBtn {\n  height: 75px;\n  width: 100%;\n  font-family: 'Julius Sans One', sans-serif;\n  border-radius: 50px;\n  background-color: #1f1d1d;\n  color: white;\n  font-size: 30px;\n  text-shadow: 0 0 2px black;\n  box-shadow: 0 0 15px black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  margin: 0 auto;\n  cursor: pointer;\n}\n@media screen and (max-width: 500px) {\n  .container .content .enrollBtn {\n    width: 200px;\n    font-size: 16px;\n  }\n}\n.container .content .lessonHead {\n  width: 100%;\n  margin-top: 40px;\n  text-align: center;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n}\n.container .content .lessonText {\n  width: 100%;\n  margin-top: 10px;\n  text-align: center;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 20px;\n}\n.container .content .lessonText ul li {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9jb3ZpZC1pbmZvL2NvdmlkLWluZm8uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvdmlkLWluZm8vY292aWQtaW5mby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtDQ0NIO0FETEQ7RUFPUSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0NDQ1A7QURDTztFQUFBO0lBQ0ksV0FBQTtHQ0VUO0NBQ0Y7QURmRDtFQWdCWSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7Q0NFWDtBRHRCRDtFQXVCWSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7Q0NFWDtBRDdCRDtFQThCWSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDJDQUFBO0VBQ0Esb0JBQUE7RUFFQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0NDQVg7QURDVztFQUFBO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0dDRWI7Q0FDRjtBRHBERDtFQXFEWSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7Q0NFWDtBRDNERDtFQTREWSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7Q0NFWDtBRGxFRDtFQW1FZ0IsaUJBQUE7Q0NFZiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkLWluZm8vY292aWQtaW5mby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpe1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlSGVhZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlVGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVucm9sbEJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCBibGFjaztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sZXNzb25IZWFkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubGVzc29uVGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyIC5jb250ZW50IHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4uY29udGFpbmVyIC5jb250ZW50IC5wYWdlSGVhZCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQgLnBhZ2VUZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5jb250ZW50IC5lbnJvbGxCdG4ge1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDJweCBibGFjaztcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciAuY29udGVudCAuZW5yb2xsQnRuIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uY29udGFpbmVyIC5jb250ZW50IC5sZXNzb25IZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udGFpbmVyIC5jb250ZW50IC5sZXNzb25UZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5jb250ZW50IC5sZXNzb25UZXh0IHVsIGxpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/covid-info/covid-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/covid-info/covid-info.component.ts ***!
  \****************************************************/
/*! exports provided: CovidInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidInfoComponent", function() { return CovidInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CovidInfoComponent = /** @class */ (function () {
    function CovidInfoComponent() {
    }
    CovidInfoComponent.prototype.ngOnInit = function () {
    };
    CovidInfoComponent.prototype.displayForm = function () {
        document.getElementById('contactForm').classList.remove('hidden');
    };
    CovidInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-covid-info',
            template: __webpack_require__(/*! ./covid-info.component.html */ "./src/app/covid-info/covid-info.component.html"),
            styles: [__webpack_require__(/*! ./covid-info.component.less */ "./src/app/covid-info/covid-info.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CovidInfoComponent);
    return CovidInfoComponent;
}());



/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"socialMedia\">\n        <a href=\"https://www.facebook.com/MilesAheadMusicUtah/\" target=\"_blank\"> \n            <div class=\"facebook\"></div>\n        </a>\n        <a href=\"https://www.instagram.com/milesaheadmusiclessons/\" target=\"_blank\">\n            <div class=\"instagram\"></div>\n        </a>\n    </div>\n    <div>\n        &copy; Miles Ahead Music - 2020<br>\n        Developed and maintained by Raspberry Factory Web Development\n    </div>\n    <div class=\"siteUsage\">\n        By using our site you agree to our <div id=\"gAnalytics\" (click)=\"displaySiteNotices()\">privacy policy</div>.\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.less":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 150px;\n  width: 100%;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background-color: #1f1d1d;\n  z-index: 2;\n  position: absolute;\n  font-family: 'Quicksand', sans-serif;\n}\n.footer .socialMedia {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.footer .socialMedia div {\n  height: 30px;\n  width: 30px;\n  background-size: cover;\n  cursor: pointer;\n}\n.footer .socialMedia .facebook {\n  background-image: url('fbLogo.png');\n  margin-right: 5px;\n}\n.footer .socialMedia .instagram {\n  height: 30px;\n  width: 30px;\n  background-image: url('instaLogo.png');\n  margin-left: 5px;\n}\n.footer .siteUsage {\n  margin-top: 20px;\n}\n.footer .siteUsage #gAnalytics {\n  display: inline;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9mb290ZXItYmFyL2Zvb3Rlci1iYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Zvb3Rlci1iYXIvZm9vdGVyLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0NDQ0g7QURWRDtFQVlRLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtDQ0NQO0FEakJEO0VBbUJZLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtDQ0NYO0FEdkJEO0VBMEJZLG9DQUFBO0VBQ0Esa0JBQUE7Q0NBWDtBRDNCRDtFQThCWSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7Q0NBWDtBRGpDRDtFQXNDUSxpQkFBQTtDQ0ZQO0FEcENEO0VBeUNZLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtDQ0ZYIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyLWJhci9mb290ZXItYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDI5LCAyOSk7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuXG4gICAgLnNvY2lhbE1lZGlhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYWNlYm9vayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2ZiTG9nby5wbmcnKTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0YWdyYW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2luc3RhTG9nby5wbmcnKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2l0ZVVzYWdlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAjZ0FuYWx5dGljcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkMWQ7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xufVxuLmZvb3RlciAuc29jaWFsTWVkaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5mb290ZXIgLnNvY2lhbE1lZGlhIGRpdiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXIgLnNvY2lhbE1lZGlhIC5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvZmJMb2dvLnBuZycpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5mb290ZXIgLnNvY2lhbE1lZGlhIC5pbnN0YWdyYW0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2luc3RhTG9nby5wbmcnKTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5mb290ZXIgLnNpdGVVc2FnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZm9vdGVyIC5zaXRlVXNhZ2UgI2dBbmFseXRpY3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.ts ***!
  \****************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterBarComponent = /** @class */ (function () {
    function FooterBarComponent() {
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    FooterBarComponent.prototype.displaySiteNotices = function () {
        document.getElementById('siteNoticesContent').classList.remove('hidden');
    };
    FooterBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-bar',
            template: __webpack_require__(/*! ./footer-bar.component.html */ "./src/app/footer-bar/footer-bar.component.html"),
            styles: [__webpack_require__(/*! ./footer-bar.component.less */ "./src/app/footer-bar/footer-bar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterBarComponent);
    return FooterBarComponent;
}());



/***/ }),

/***/ "./src/app/header-bar/header-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"header\">\n    <div class=\"logo inflate\" id=\"logo\" routerLink=\"/home\"></div>\n    <div class=\"navSection\">\n        <div class=\"navBtn\" routerLink=\"/contact-us\">\n                Contact Us\n        </div>\n        <div class=\"navBtn\" id=\"aboutUs\" routerLink=\"/about-us\">\n                About Us\n        </div>\n        <div class=\"navBtn\" id=\"lessonInfo\" routerLink=\"/lesson-info\">\n                Lesson Info\n        </div>\n        <!-- <div>\n                Online Portal Login\n        </div> -->\n        <div class=\"newsBanner\" routerLink=\"/covid-info\">\n                COVID-19 Info\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.less":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 100px;\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  font-family: 'Julius Sans One', sans-serif;\n  z-index: 40;\n}\n.header .logo {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  background-image: url('milesAheadLogo.png');\n  background-size: cover;\n  outline: none;\n  z-index: 41;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n@media screen and (min-width: 500px) {\n  .header .logo {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n.header .inflate {\n  transform: scale(1.15);\n  top: 10px;\n  left: 10px;\n  transition: 0.3s;\n}\n@media screen and (min-width: 500px) {\n  .header .inflate {\n    top: 30px;\n    transform: scale(1.5);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header .inflate {\n    top: 100px;\n    margin-left: 100px;\n    transform: scale(2.5);\n  }\n}\n.header .navSection {\n  width: calc(100% - 140px);\n  margin-left: 100px;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n}\n@media screen and (max-width: 330px) {\n  .header .navSection {\n    font-size: 12px;\n  }\n}\n@media screen and (min-width: 500px) {\n  .header .navSection {\n    padding-left: 50px;\n    padding-right: 50px;\n    margin-left: 120px;\n    width: calc(100% - 240px);\n    font-size: 30px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header .navSection {\n    width: calc(100% - 440px);\n    margin-left: 300px;\n  }\n}\n.header .navSection .newsBanner {\n  height: 50px;\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: 0 0 10px black;\n  color: maroon;\n  position: absolute;\n  left: calc(50% - 150px);\n  top: 90px;\n  box-shadow: 0 0 15px black;\n  background-color: lightgray;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 25px;\n  cursor: pointer;\n}\n@media screen and (max-width: 600px) {\n  .header .navSection .newsBanner {\n    top: 75px;\n    left: calc(50% - 75px);\n    width: 150px;\n  }\n}\n.header .navSection .navBtn {\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n}\n@media screen and (min-width: 500px) {\n  .header .navSection .navBtn {\n    width: 120px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header .navSection .navBtn {\n    width: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9oZWFkZXItYmFyL2hlYWRlci1iYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2hlYWRlci1iYXIvaGVhZGVyLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7Q0NDSDtBRFJEO0VBVVEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFTQSxpQkFBQTtDQ1BQO0FEQU87RUFBQTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7R0NHVDtDQUNGO0FEM0JEO0VBZ0NRLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtDQ0ZQO0FER087RUFBQTtJQUNJLFVBQUE7SUFDQSxzQkFBQTtHQ0FUO0NBQ0Y7QURDTztFQUFBO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7R0NFVDtDQUNGO0FEOUNEO0VBK0NRLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0NDRVA7QURETztFQUFBO0lBQ0ksZ0JBQUE7R0NJVDtDQUNGO0FESE87RUFBQTtJQUNJLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7R0NNVDtDQUNGO0FETE87RUFBQTtJQUNJLDBCQUFBO0lBQ0EsbUJBQUE7R0NRVDtDQUNGO0FENUVEO0VBdUVZLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO01BQUEsc0JBQUE7VUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7Q0NRWDtBRE5XO0VBQUE7SUFDSSxVQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0dDU2I7Q0FDRjtBRHBHRDtFQStGWSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtDQ1FYO0FEUFc7RUFBQTtJQUNJLGFBQUE7R0NVYjtDQUNGO0FEVFc7RUFBQTtJQUNJLGFBQUE7R0NZYjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyLWJhci9oZWFkZXItYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgei1pbmRleDogNDA7XG5cbiAgICAubG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pbGVzQWhlYWRMb2dvLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB6LWluZGV4OiA0MTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfTtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgLmluZmxhdGUge1xuICAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmF2U2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiB+XCJjYWxjKDEwMCUgLSAxNDBweClcIjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCl7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiB+XCJjYWxjKDEwMCUgLSAyNDBweClcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgd2lkdGg6IH5cImNhbGMoMTAwJSAtIDQ0MHB4KVwiO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ld3NCYW5uZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiBtYXJvb247XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiB+XCJjYWxjKDUwJSAtIDE1MHB4KVwiO1xuICAgICAgICAgICAgdG9wOiA5MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAgICAgICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogflwiY2FsYyg1MCUgLSA3NXB4KVwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZCdG4ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIHotaW5kZXg6IDQwO1xufVxuLmhlYWRlciAubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pbGVzQWhlYWRMb2dvLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiA0MTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIC5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5oZWFkZXIgLmluZmxhdGUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIC5pbmZsYXRlIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlciAuaW5mbGF0ZSB7XG4gICAgdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICB9XG59XG4uaGVhZGVyIC5uYXZTZWN0aW9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzMwcHgpIHtcbiAgLmhlYWRlciAubmF2U2VjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIC5uYXZTZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyIC5uYXZTZWN0aW9uIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDQwcHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgfVxufVxuLmhlYWRlciAubmF2U2VjdGlvbiAubmV3c0Jhbm5lciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xuICBjb2xvcjogbWFyb29uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDkwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyIC5uYXZTZWN0aW9uIC5uZXdzQmFubmVyIHtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA3NXB4KTtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cbi5oZWFkZXIgLm5hdlNlY3Rpb24gLm5hdkJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmhlYWRlciAubmF2U2VjdGlvbiAubmF2QnRuIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyIC5uYXZTZWN0aW9uIC5uYXZCdG4ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
        window.onscroll = function () {
            growShrinkLogo();
        };
        function growShrinkLogo() {
            var logo = document.getElementById('logo');
            if (document.documentElement.scrollTop) {
                logo.classList.remove('inflate');
            }
            else {
                logo.classList.add('inflate');
            }
        }
    };
    HeaderBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__(/*! ./header-bar.component.html */ "./src/app/header-bar/header-bar.component.html"),
            styles: [__webpack_require__(/*! ./header-bar.component.less */ "./src/app/header-bar/header-bar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Layer 1 -->\n<div class=\"super\">\n  <video autoplay loop autobuffer muted playsinline id=\"studioVid\" [muted]=\"true\">\n      <source src=\"../../assets/site-media/MilesAheadBackgroundVid.mp4\">\n  </video>\n</div>\n\n\n<!-- Layer 2 -->\n<div class=\"content\">\n  <div class=\"vidOverlay\">\n      <div class=\"sellPoint\">\n          <div class=\"mainText\">\n              Music Lessons on Any Instrument\n          </div>\n          <div class=\"subText\">\n              Best Teachers. Best Price. Any Instrument.\n          </div>\n      </div>\n      <div class=\"enrollBtn\" (click)=\"displayForm()\">\n          Get A Quote\n      </div>\n  </div>\n\n    <div class=\"lessonFlex\">\n        Teachers can now come to your home or meet online!\n    </div>\n    \n  <div class=\"missionStatement\">\n      <div class=\"text\">\n              We offer the highest quality lessons at an affordable price so that you can become \n              the musician YOU want to become. Miles Ahead Music is made of hand selected teachers \n              who have proven to be the very best at what they do.\n      </div>\n  </div>\n  \n  <div class=\"instructorsHeading\">\n      Meet our Teachers!\n  </div>\n  <app-teacher-display></app-teacher-display>\n  <div class=\"reviews\">\n      <div class=\"stars\"></div>\n      <div class=\"starsSubHead\">\n          We Maintain a Five Star Rating!\n      </div>\n      <div class=\"realReviews\">\n          <app-single-review *ngFor=\"let review of reviews\" [reviewer]=\"review.reviewerName\"\n          [relationship]=\"review.relationship\" [review]=\"review.review\" [reviewId]=\"review.reviewId\"></app-single-review>\n      </div>\n  </div>\n  <div class=\"recommendSec\">\n      <a href=\"https://www.summerhaysmusic.com\" target=\"_blank\">\n          <div class=\"storeLogo\"></div>\n      </a>\n      <div class=\"storeText\">\n          Wondering where to buy or rent an instrument? Check out Summerhays, our favorite music store!\n          <br>\n          <br>\n          www.summerhaysmusic.com\n      </div>\n  </div>\n  <app-footer-bar></app-footer-bar>\n</div>\n\n\n\n<div class=\"infoPop hidden\" id=\"pop1\">\n  <div class=\"popContainer\">\n      <!-- <div class=\"adVideo\">\n        <video autoplay loop autobuffer muted playsinline id=\"blackFriday2020\" [muted]=\"true\">\n            <source src=\"../../assets/site-media/Black-3.MP4\">\n        </video>\n      </div> -->\n      <div class=\"popText\">\n          Give the gift of music!\n      </div>\n      <div class=\"popBtn\" (click)=\"displayForm()\">\n           Try a Free Lesson\n      </div>\n  </div>\n  <div class=\"exitBtn\" (click)=\"hidePop()\">\n      X\n  </div>\n</div>\n<app-contact-form></app-contact-form>\n"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".super {\n  height: 400px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  z-index: 1;\n}\n@media screen and (min-width: 500px) {\n  .super {\n    height: 500px;\n  }\n}\n@media scren and (min-width: 1200px) {\n  .super {\n    height: 600px;\n  }\n}\n.super #studioVid {\n  min-height: 100%;\n  min-width: 100%;\n  width: auto;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.content {\n  width: 100%;\n  position: absolute;\n  z-index: 2;\n  font-family: 'Quicksand', sans-serif;\n}\n.content .vidOverlay {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay {\n    height: 400px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .content .vidOverlay {\n    height: 500px;\n  }\n}\n.content .vidOverlay .sellPoint {\n  color: white;\n  font-family: 'Julius Sans One', sans-serif;\n  text-align: center;\n  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 10px black, 0 0 10px black, 0 0 15px black;\n  margin-bottom: 50px;\n}\n.content .vidOverlay .sellPoint .mainText {\n  font-size: 40px;\n  margin-top: 160px;\n  margin-bottom: 10px;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay .sellPoint .mainText {\n    font-size: 50px;\n  }\n}\n.content .vidOverlay .sellPoint .subText {\n  width: 200px;\n  margin: 0 auto;\n  font-size: 15px;\n  font-family: 'Julius Sans One', sans-serif;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay .sellPoint .subText {\n    font-size: 20px;\n    width: 300px;\n  }\n}\n.content .vidOverlay .enrollBtn {\n  height: 100px;\n  width: 90%;\n  font-family: 'Julius Sans One', sans-serif;\n  border-radius: 50px;\n  background-color: #1f1d1d;\n  color: white;\n  font-size: 30px;\n  text-shadow: 0 0 2px black;\n  box-shadow: 0 0 15px black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 350px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay .enrollBtn {\n    width: 300px;\n    top: 450px;\n  }\n}\n.content .lessonFlex {\n  height: 100px;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 200px;\n  background-color: lightgray;\n  box-shadow: 0 0 20px black;\n}\n@media screen and (min-width: 500px) {\n  .content .lessonFlex {\n    margin-top: 250px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .content .lessonFlex {\n    margin-top: 150px;\n  }\n}\n.content .missionStatement {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  margin-top: 50px;\n}\n@media screen and (min-width: 500px) {\n  .content .missionStatement {\n    margin-top: 100px;\n  }\n}\n.content .missionStatement .text {\n  width: 60%;\n  font-size: 15px;\n  color: #383636;\n  font-family: 'Quicksand', sans-serif;\n  text-align: center;\n}\n@media screen and (min-width: 500px) {\n  .content .missionStatement .text {\n    font-size: 18px;\n  }\n}\n.content .instructorsHeading {\n  font-size: 40px;\n  font-family: 'Julius Sans One', sans-serif;\n  text-align: center;\n  background-color: white;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n@media screen and (min-width: 500px) {\n  .content .instructorsHeading {\n    font-size: 50px;\n  }\n}\n.content .reviews {\n  width: 100%;\n  margin-top: 50px;\n}\n.content .reviews .stars {\n  height: 50px;\n  width: 260px;\n  margin: 0 auto;\n  background-image: url('fiveStars.png');\n  background-size: cover;\n}\n.content .reviews .starsSubHead {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 30px;\n  font-family: 'Julius Sans One', sans-serif;\n}\n.content .reviews .realReviews {\n  margin-top: 50px;\n}\n@media screen and (min-width: 1200px) {\n  .content .reviews .realReviews {\n    display: flex;\n    justify-content: center;\n  }\n}\n.content .recommendSec {\n  width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background-color: #3d3a3a;\n  margin-bottom: 100px;\n  margin-top: 50px;\n}\n.content .recommendSec .storeLogo {\n  height: 180px;\n  width: 180px;\n  border-radius: 90px;\n  background-image: url('SummerhaysLogo.jpeg');\n  background-size: cover;\n  cursor: pointer;\n  transition: 0.2s;\n  margin: 0 auto;\n}\n.content .recommendSec .storeLogo:hover {\n  transform: scale(1.05);\n  transition: 0.2s;\n}\n.content .recommendSec .storeText {\n  width: 90%;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n.infoPop {\n  position: fixed;\n  height: 400px;\n  width: 400px;\n  right: 20px;\n  bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  box-shadow: 0 0 10px black, 0 0 15px black;\n  background-color: rgba(146, 26, 3, 0.9);\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 450px) {\n  .infoPop {\n    height: 300px;\n    width: 300px;\n  }\n}\n.infoPop .popContainer .adVideo video {\n  height: 400px;\n  width: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media screen and (max-width: 450px) {\n  .infoPop .popContainer .adVideo video {\n    height: 300px;\n    width: 300px;\n  }\n}\n.infoPop .popContainer .popText {\n  text-align: center;\n  font-size: 40px;\n  width: 90%;\n  margin: 0 auto;\n}\n.infoPop .popContainer .popBtn {\n  height: 50px;\n  width: 300px;\n  border-radius: 25px;\n  background-color: black;\n  box-shadow: 0 0 10px white;\n  color: white;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  cursor: pointer;\n}\n@media screen and (max-width: 450px) {\n  .infoPop .popContainer .popBtn {\n    width: 200px;\n    font-size: 20px;\n  }\n}\n.infoPop .exitBtn {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  background-color: rgba(0, 0, 0, 0.6);\n  font-size: 20px;\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0NDQUg7QURDRztFQUFBO0lBQ0ksY0FBQTtHQ0VMO0NBQ0Y7QURERztFQUFBO0lBQ0ksY0FBQTtHQ0lMO0NBQ0Y7QURuQkQ7RUFrQlEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0NDSVA7QURERDtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtDQ0dIO0FEUEQ7RUFPUSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7Q0NHUDtBREZPO0VBQUE7SUFDSSxjQUFBO0dDS1Q7Q0FDRjtBREpPO0VBQUE7SUFDSSxjQUFBO0dDT1Q7Q0FDRjtBRHZCRDtFQW9CWSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDBGQUFBO0VBQ0Esb0JBQUE7Q0NNWDtBRDlCRDtFQTJCZ0IsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0NDTWY7QURMZTtFQUFBO0lBQ0ksZ0JBQUE7R0NRakI7Q0FDRjtBRHhDRDtFQW1DZ0IsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0NDUWY7QURQZTtFQUFBO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0dDVWpCO0NBQ0Y7QURwREQ7RUErQ1ksY0FBQTtFQUNBLFdBQUE7RUFFQSwyQ0FBQTtFQUNBLG9CQUFBO0VBRUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0NDTVg7QURMVztFQUFBO0lBQ0ksYUFBQTtJQUNBLFdBQUE7R0NRYjtDQUNGO0FENUVEO0VBeUVRLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7Q0NNUDtBRExPO0VBQUE7SUFDSSxrQkFBQTtHQ1FUO0NBQ0Y7QURQTztFQUFBO0lBQ0ksa0JBQUE7R0NVVDtDQUNGO0FEakdEO0VBMkZRLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7Q0NTUDtBRFJPO0VBQUE7SUFDSSxrQkFBQTtHQ1dUO0NBQ0Y7QUQ5R0Q7RUFzR1ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7Q0NXWDtBRFZXO0VBQUE7SUFDSSxnQkFBQTtHQ2FiO0NBQ0Y7QUQxSEQ7RUFrSFEsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0NDV1A7QURWTztFQUFBO0lBQ0ksZ0JBQUE7R0NhVDtDQUNGO0FEdklEO0VBOEhRLFlBQUE7RUFDQSxpQkFBQTtDQ1lQO0FEM0lEO0VBa0lZLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7Q0NZWDtBRGxKRDtFQXlJWSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtDQ1lYO0FEeEpEO0VBK0lZLGlCQUFBO0NDWVg7QURYVztFQUFBO0lBQ0ksY0FBQTtJQUNBLHdCQUFBO0dDY2I7Q0FDRjtBRGpLRDtFQXdKUSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtDQ1lQO0FEektEO0VBZ0tZLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7Q0NZWDtBRG5MRDtFQTBLWSx1QkFBQTtFQUNBLGlCQUFBO0NDWVg7QUR2TEQ7RUE4S1ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtDQ1lYO0FEUkQ7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0NDVUg7QURSRztFQUFBO0lBQ0ksY0FBQTtJQUNBLGFBQUE7R0NXTDtDQUNGO0FEN0JEO0VBdUJnQixjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtDQ1NmO0FEUGU7RUFBQTtJQUNJLGNBQUE7SUFDQSxhQUFBO0dDVWpCO0NBQ0Y7QUQzQ0Q7RUFzQ1ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0NDUVg7QURqREQ7RUE0Q1ksYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7Q0NRWDtBRE5XO0VBQUE7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7R0NTYjtDQUNGO0FEdkVEO0VBa0VRLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7Q0NRUDtBRExEO0VBQ0ksY0FBQTtDQ09IIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cGVyIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIC8vIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgei1pbmRleDogMTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG5cbiAgICAjc3R1ZGlvVmlkIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG5cbiAgICAudmlkT3ZlcmxheSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG5cblxuICAgICAgICAuc2VsbFBvaW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAwIDAgNXB4IGJsYWNrLCAwIDAgMTBweCBibGFjaywgMCAwIDEwcHggYmxhY2ssIDAgMCAxNXB4IGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgICAgICAgICAgLm1haW5UZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTYwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3ViVGV4dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZW5yb2xsQnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgLy8gd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDI5LCAyOSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCBibGFjaztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IGJsYWNrO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzUwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogNDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGVzc29uRmxleCB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggYmxhY2s7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taXNzaW9uU3RhdGVtZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYig1NiwgNTQsIDU0KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5zdHJ1Y3RvcnNIZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZXZpZXdzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgLnN0YXJzIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvZml2ZVN0YXJzLnBuZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXJzU3ViSGVhZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFsUmV2aWV3cyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlY29tbWVuZFNlYyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNTgsIDU4KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgLnN0b3JlTG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL1N1bW1lcmhheXNMb2dvLmpwZWdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3JlTG9nbzpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yZVRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW5mb1BvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrLCAwIDAgMTVweCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NiwyNiwzLC45KTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5wb3BDb250YWluZXIge1xuICAgICAgICAuYWRWaWRlbyB7XG4gICAgICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3BUZXh0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAucG9wQnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmV4aXRCdG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi5zdXBlciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5zdXBlciB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1cGVyIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG59XG4uc3VwZXIgI3N0dWRpb1ZpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRlbnQgLnZpZE92ZXJsYXkge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC52aWRPdmVybGF5IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRlbnQgLnZpZE92ZXJsYXkge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbn1cbi5jb250ZW50IC52aWRPdmVybGF5IC5zZWxsUG9pbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrLCAwIDAgMTVweCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5jb250ZW50IC52aWRPdmVybGF5IC5zZWxsUG9pbnQgLm1haW5UZXh0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC52aWRPdmVybGF5IC5zZWxsUG9pbnQgLm1haW5UZXh0IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cbi5jb250ZW50IC52aWRPdmVybGF5IC5zZWxsUG9pbnQgLnN1YlRleHQge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC52aWRPdmVybGF5IC5zZWxsUG9pbnQgLnN1YlRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbi5jb250ZW50IC52aWRPdmVybGF5IC5lbnJvbGxCdG4ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogOTAlO1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDJweCBibGFjaztcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC52aWRPdmVybGF5IC5lbnJvbGxCdG4ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0b3A6IDQ1MHB4O1xuICB9XG59XG4uY29udGVudCAubGVzc29uRmxleCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggYmxhY2s7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAubGVzc29uRmxleCB7XG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGVudCAubGVzc29uRmxleCB7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5taXNzaW9uU3RhdGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC5taXNzaW9uU3RhdGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgfVxufVxuLmNvbnRlbnQgLm1pc3Npb25TdGF0ZW1lbnQgLnRleHQge1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzgzNjM2O1xuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC5taXNzaW9uU3RhdGVtZW50IC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5jb250ZW50IC5pbnN0cnVjdG9yc0hlYWRpbmcge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC5pbnN0cnVjdG9yc0hlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxufVxuLmNvbnRlbnQgLnJldmlld3Mge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb250ZW50IC5yZXZpZXdzIC5zdGFycyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvZml2ZVN0YXJzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50IC5yZXZpZXdzIC5zdGFyc1N1YkhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRlbnQgLnJldmlld3MgLnJlYWxSZXZpZXdzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGVudCAucmV2aWV3cyAucmVhbFJldmlld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5jb250ZW50IC5yZWNvbW1lbmRTZWMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzYTNhO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb250ZW50IC5yZWNvbW1lbmRTZWMgLnN0b3JlTG9nbyB7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvU3VtbWVyaGF5c0xvZ28uanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250ZW50IC5yZWNvbW1lbmRTZWMgLnN0b3JlTG9nbzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGVudCAucmVjb21tZW5kU2VjIC5zdG9yZVRleHQge1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaW5mb1BvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2ssIDAgMCAxNXB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NiwgMjYsIDMsIDAuOSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmluZm9Qb3Age1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG4uaW5mb1BvcCAucG9wQ29udGFpbmVyIC5hZFZpZGVvIHZpZGVvIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmluZm9Qb3AgLnBvcENvbnRhaW5lciAuYWRWaWRlbyB2aWRlbyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbi5pbmZvUG9wIC5wb3BDb250YWluZXIgLnBvcFRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW5mb1BvcCAucG9wQ29udGFpbmVyIC5wb3BCdG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5pbmZvUG9wIC5wb3BDb250YWluZXIgLnBvcEJ0biB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuLmluZm9Qb3AgLmV4aXRCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.reviews = [];
        this.instructors = [];
        this.displayPop();
        this.reviews = [
            {
                "reviewerName": "Amy Stoddard",
                "relationship": "Student Parent",
                "review": "We've been looking for a trombone teacher for my son for years. \n          We finally found one we love! My son had marching band pass offs on Friday, \n          but didn't get the music until Thursday afternoon. His teacher, in 30 \n          minutes, got him to memorize the whole song and taught him valuable lessons \n          on memorization. I'm super impressed.",
                "image": "studioPic1.jpg",
                "reviewId": "review1"
            },
            {
                "reviewerName": "Hailey Allen",
                "relationship": "Student Parent",
                "review": "My daughter had learned so much taking piano lessons here! She's \n          now writting her own music now too! We love it.",
                "image": "studioPic2.jpg",
                "reviewId": "review2"
            },
            {
                "reviewerName": "Keanna Zarate",
                "relationship": "Student Parent",
                "review": "We have loved Miles Ahead Music! We were looking for a saxophone \n          instructor for our son and found Emily! We've been amazed at the progress \n          he's made. She's helped him add emotion and style to his playing, he enjoys \n          working with her and always comes home with great things to say!! Highly \n          recommended!",
                "image": "studioPic3.jpg",
                "reviewId": "review3"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.displayForm = function () {
        document.getElementById('contactForm').classList.remove('hidden');
    };
    HomeComponent.prototype.displayPop = function () {
        setTimeout(function () {
            document.getElementById('pop1').classList.remove('hidden');
        }, 2000);
    };
    HomeComponent.prototype.hidePop = function () {
        document.getElementById('pop1').classList.add('hidden');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lesson-info/lesson-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-info/lesson-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"content\">\n  <div class=\"sellPoint\">\n      <div>\n          Lessons on Any Instrument\n      </div>\n  </div>\n  <div class=\"quote\">\n      <div class=\"quoteBtn\" (click)=\"displayForm()\">\n          Get A Quote\n      </div>\n  </div>\n  <div class=\"examples\">\n      <div class=\"exampleHead\">\n          <div>\n              Here are a few we regularly teach:\n          </div>\n      </div>\n      <div class=\"instList\">\n          <div>\n              Voice | Piano | Drums | Music Production | \n              Song Writing | Violin | Viola | Cello | Bass | \n              Ukulele | Guitar | Banjo | Mandolin | Saxophone | \n              Clarinet | Flute | Oboe | Bassoon | \n              English Horn | Trumpet | Trombone | French Horn | \n              Euphonium | Baritone | Tuba\n          </div>\n      </div>\n  </div>\n\n  <div class=\"photoDisplay\">\n      <div class=\"photo\">\n          \n      </div>\n  </div>\n\n  <div class=\"teachers\">\n      <div class=\"pro\">\n          <div class=\"title\">\n              Professional Instructors\n          </div>\n          <div class=\"text\">\n              Our pro teachers here at Miles Ahead Music have or are about \n              to receive degrees on the instrument they teach and \n              perform locally and globally as professional \n              musicians! Our pro teachers have played in Dubai, \n              the Philippines, China, Australia, Thailand, and all \n              over Europe, North and South America! They have shared \n              stages with KELLY CLARKSON, JOURNEY, LEANN RIMES, NEON \n              TREES and countless jazz and classical legends.\n          </div>\n      </div>\n      <!-- <div class=\"apprentice\">\n          <div class=\"title\">\n              Apprentice Teachers\n          </div>\n          <div class=\"text\">\n              Our apprentice teachers are \n              non-music major teachers that have shown exceptional \n              ability on their instrument. To learn with an apprentice \n              teacher the student must have under 1 year of experience. \n              Learning with an apprentice teacher is a great way to get \n              started on lessons at a more affordable price!\n          </div>\n      </div> -->\n      <div class=\"teachersFair\">\n          Doing It Right:\n          At Miles Ahead Music, we pay our teachers fair wages while maintaining fair\n          tuition.\n      </div>\n  </div>\n  \n  <div class=\"lessons\">\n      <div class=\"lessonsHead\">\n          Private Lesson Details\n      </div>\n      <div class=\"lessonsText\">\n          Lessons are taken by term: Fall, Winter, Spring \n          and Summer.\n          <br><br>\n          Miles Ahead Music stands out from other arts programs by offering the \n          best pricing as well as 10% OFF for multi-student families!\n          <br><br>\n      </div>\n\n      <div class=\"lessonsType\">\n          <div class=\"length30\">\n              <div class=\"title\">\n                  30-Minute Lessons\n              </div>\n              <div class=\"text\">\n                  30-minute one-on-one lessons with an extraordinary teacher!\n              </div> \n          </div>\n          <div class=\"length60\">\n              <div class=\"title\">\n                  60-Minute Lessons\n              </div>\n              <div class=\"text\">\n                  Hour-long one-on-one lessons with an extraordinary teacher! \n                  These lessons are great for students that are seriously \n                  pursuing music, or feel that they need some extra time with \n                  the teacher. Our teachers love hour long lessons, since they feel \n                  they can help the most in this setting!\n              </div>\n          </div>\n          <div class=\"semiPrivate\">\n              <div class=\"title\">\n                  Semi-Private Lessons\n              </div>\n              <div class=\"text\">\n                  Group lessons where students can learn together on the same \n                  instrument. Several options exist within this category, from \n                  two students to five students learning at once.\n              </div>\n          </div>\n          <div class=\"musicAppreciate\">\n              <div class=\"title\">\n                  Music Appreciation Class\n              </div>\n              <div class=\"text\">\n                  Bring your children (ages 1-3 or ages 4-6) in for classes to learn \n                  music fundamentals in a group setting! Children create \n                  music using Boomwhackers, bells, auxiliary percussion \n                  instruments and their own voices. We encourage the kids \n                  to learn rhythms and music through dance and actual \n                  instrumental experience. More advanced classes can learn \n                  on recorder, piano or ukulele!\n              </div>\n          </div>\n      </div>\n\n  </div>\n\n  <app-footer-bar></app-footer-bar>\n\n</div>\n<app-contact-form></app-contact-form>\n"

/***/ }),

/***/ "./src/app/lesson-info/lesson-info.component.less":
/*!********************************************************!*\
  !*** ./src/app/lesson-info/lesson-info.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  position: absolute;\n  top: 100px;\n  z-index: 2;\n  font-size: 20px;\n  font-family: \"Quicksand\", sans-serif;\n}\n.content .sellPoint {\n  height: 100px;\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 50px;\n  text-align: center;\n}\n.content .quote {\n  margin-top: 50px;\n}\n.content .quote .quoteBtn {\n  height: 100px;\n  width: 300px;\n  border-radius: 50px;\n  background-color: #1f1d1d;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n  box-shadow: 0 0 10px black;\n}\n.content .examples {\n  width: 100%;\n  margin-top: 50px;\n}\n.content .examples .exampleHead {\n  height: 100px;\n  width: 100%;\n  font-size: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.content .examples .instList {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n.content .examples .instList .div {\n  width: 700px;\n  text-align: center;\n}\n.content .photoDisplay {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .photoDisplay .photo {\n  height: 250px;\n  width: 250px;\n  background-image: url('lessonImage.jpg');\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n}\n.content .teachers {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 50px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.content .teachers .title {\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.content .teachers .text {\n  margin-bottom: 50px;\n}\n.content .teachers .teachersFair {\n  width: 100%;\n  text-align: center;\n}\n.content .lessons {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 100px;\n  text-align: center;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.content .lessons .lessonsHead {\n  width: 100%;\n  font-size: 40px;\n  margin-bottom: 50px;\n  text-align: center;\n  font-family: 'Julius Sans One', sans-serif;\n}\n.content .lessons .lessonsType .title {\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n}\n.content .lessons .lessonsType .text {\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9sZXNzb24taW5mby9sZXNzb24taW5mby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGVzc29uLWluZm8vbGVzc29uLWluZm8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7Q0NBSDtBRE5EO0VBU1EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0NDQVA7QURqQkQ7RUFvQlEsaUJBQUE7Q0NBUDtBRHBCRDtFQXVCWSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0NDQVg7QURsQ0Q7RUFzQ1EsWUFBQTtFQUNBLGlCQUFBO0NDRFA7QUR0Q0Q7RUEwQ1ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtDQ0RYO0FEaEREO0VBb0RZLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0NDRFg7QUQxREQ7RUE4RGdCLGFBQUE7RUFDQSxtQkFBQTtDQ0RmO0FEOUREO0VBb0VRLGNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtDQ0hQO0FEcEVEO0VBMEVZLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7Q0NIWDtBRDVFRDtFQW1GUSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtDQ0pQO0FEbkZEO0VBMEZZLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0NDSlg7QUR6RkQ7RUFnR1ksb0JBQUE7Q0NKWDtBRDVGRDtFQW9HWSxZQUFBO0VBQ0EsbUJBQUE7Q0NMWDtBRGhHRDtFQXlHUSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0NDTlA7QUR4R0Q7RUFpSFksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0NDTlg7QUQvR0Q7RUE2SGdCLDJDQUFBO0VBQ0EsZ0JBQUE7Q0NYZjtBRG5IRDtFQWlJZ0Isb0JBQUE7Q0NYZiIsImZpbGUiOiJzcmMvYXBwL2xlc3Nvbi1pbmZvL2xlc3Nvbi1pbmZvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG5cbiAgICAuc2VsbFBvaW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAucXVvdGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAgIC5xdW90ZUJ0bntcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmV4YW1wbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgLmV4YW1wbGVIZWFkIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0TGlzdCB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuXG4gICAgICAgICAgICAuZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5waG90b0Rpc3BsYXkge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAucGhvdG8ge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2xlc3NvbkltYWdlLmpwZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGVhY2hlcnMge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRlYWNoZXJzRmFpciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGVzc29ucyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcblxuICAgICAgICAubGVzc29uc0hlYWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC8vIC5sZXNzb25zVGV4dCB7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAubGVzc29uc1R5cGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGVudCAuc2VsbFBvaW50IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgLnF1b3RlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb250ZW50IC5xdW90ZSAucXVvdGVCdG4ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkMWQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG59XG4uY29udGVudCAuZXhhbXBsZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb250ZW50IC5leGFtcGxlcyAuZXhhbXBsZUhlYWQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQgLmV4YW1wbGVzIC5pbnN0TGlzdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cbi5jb250ZW50IC5leGFtcGxlcyAuaW5zdExpc3QgLmRpdiB7XG4gIHdpZHRoOiA3MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgLnBob3RvRGlzcGxheSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQgLnBob3RvRGlzcGxheSAucGhvdG8ge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2xlc3NvbkltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbn1cbi5jb250ZW50IC50ZWFjaGVycyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5jb250ZW50IC50ZWFjaGVycyAudGl0bGUge1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQgLnRlYWNoZXJzIC50ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5jb250ZW50IC50ZWFjaGVycyAudGVhY2hlcnNGYWlyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IC5sZXNzb25zIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLmNvbnRlbnQgLmxlc3NvbnMgLmxlc3NvbnNIZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG59XG4uY29udGVudCAubGVzc29ucyAubGVzc29uc1R5cGUgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udGVudCAubGVzc29ucyAubGVzc29uc1R5cGUgLnRleHQge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/lesson-info/lesson-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-info/lesson-info.component.ts ***!
  \******************************************************/
/*! exports provided: LessonInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonInfoComponent", function() { return LessonInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LessonInfoComponent = /** @class */ (function () {
    function LessonInfoComponent() {
    }
    LessonInfoComponent.prototype.ngOnInit = function () {
    };
    LessonInfoComponent.prototype.displayForm = function () {
        document.getElementById('contactForm').classList.remove('hidden');
    };
    LessonInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lesson-info',
            template: __webpack_require__(/*! ./lesson-info.component.html */ "./src/app/lesson-info/lesson-info.component.html"),
            styles: [__webpack_require__(/*! ./lesson-info.component.less */ "./src/app/lesson-info/lesson-info.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LessonInfoComponent);
    return LessonInfoComponent;
}());



/***/ }),

/***/ "./src/app/review-backgrounds.service.ts":
/*!***********************************************!*\
  !*** ./src/app/review-backgrounds.service.ts ***!
  \***********************************************/
/*! exports provided: ReviewBackgroundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewBackgroundsService", function() { return ReviewBackgroundsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewBackgroundsService = /** @class */ (function () {
    function ReviewBackgroundsService() {
        this.images = ["studioPic1", "studioPic2", "studioPic3"];
        this.indexCounter = 0;
    }
    ReviewBackgroundsService.prototype.pickImage = function () {
        if (this.indexCounter < this.images.length) {
            var response = this.images[this.indexCounter];
            this.indexCounter++;
            return response;
        }
        if (this.indexCounter >= this.images.length) {
            this.indexCounter = 1;
            return this.images[0];
        }
    };
    ReviewBackgroundsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewBackgroundsService);
    return ReviewBackgroundsService;
}());



/***/ }),

/***/ "./src/app/server-link.service.ts":
/*!****************************************!*\
  !*** ./src/app/server-link.service.ts ***!
  \****************************************/
/*! exports provided: ServerLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLinkService", function() { return ServerLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");



var ServerLinkService = /** @class */ (function () {
    function ServerLinkService(ioSocket) {
        this.ioSocket = ioSocket;
    }
    ServerLinkService.prototype.submitContactForm = function (parentFirst, parentLast, phoneNum, email, studentFirst, studentLast, instrument) {
        var form = {
            firstname: parentFirst,
            lastname: parentLast,
            phone: phoneNum,
            email: email,
            studentfirst: studentFirst,
            studentlast: studentLast,
            instrument: instrument
        };
        this.ioSocket.emit("newFormSubmit", JSON.stringify(form));
        this.ioSocket.on('formConfirm', function () {
            console.log('Form successfully submitted');
            document.getElementById('formStatus').classList.remove('hidden');
            document.getElementById('pleaseComplete').classList.add('hidden');
            document.getElementById('formError').classList.add('hidden');
        });
        this.ioSocket.on('emailError', function () {
            document.getElementById('formError').classList.remove('hidden');
        });
    };
    ServerLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], ServerLinkService);
    return ServerLinkService;
}());



/***/ }),

/***/ "./src/app/single-review/single-review.component.html":
/*!************************************************************!*\
  !*** ./src/app/single-review/single-review.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"singleReview {{backgroundImgClass}}\" id=\"{{reviewId}}\">\n    <div class=\"review\">{{review}}</div>\n    <div class=\"reviewerName\">-{{reviewer}}</div>\n    <div class=\"relationship\">{{relationship}}</div>\n</div>"

/***/ }),

/***/ "./src/app/single-review/single-review.component.less":
/*!************************************************************!*\
  !*** ./src/app/single-review/single-review.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".singleReview {\n  height: 500px;\n  width: 90%;\n  color: white;\n  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 10px black, 0 0 15px black, 0 0 20px black;\n  border-radius: 7px;\n  margin-left: 5%;\n  margin-bottom: 20px;\n  transition: 0.4s;\n  background-size: cover;\n}\n@media screen and (min-width: 500px) {\n  .singleReview {\n    width: 50%;\n    margin-left: 25%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .singleReview {\n    width: 350px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n.singleReview .review {\n  font-size: 20px;\n  height: 70%;\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n.singleReview .reviewerName {\n  font-size: 25px;\n  text-align: center;\n  margin-top: 20px;\n}\n.singleReview .relationship {\n  font-size: 18px;\n  text-align: center;\n}\n.studioPic1 {\n  background-image: url('studioPic1.jpg');\n  background-position-x: -200px;\n}\n.studioPic2 {\n  background-image: url('studioPic2.jpg');\n}\n.studioPic3 {\n  background-image: url('studioPic3.jpg');\n  background-position-x: -150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9zaW5nbGUtcmV2aWV3L3NpbmdsZS1yZXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NpbmdsZS1yZXZpZXcvc2luZ2xlLXJldmlldy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDBGQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtDQ0FIO0FEQ0c7RUFBQTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtHQ0VMO0NBQ0Y7QURERztFQUFBO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7R0NJTDtDQUNGO0FEdEJEO0VBcUJRLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtDQ0lQO0FEaENEO0VBK0JRLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQ0lQO0FEckNEO0VBb0NRLGdCQUFBO0VBQ0EsbUJBQUE7Q0NJUDtBREREO0VBQ0ksd0NBQUE7RUFDQSw4QkFBQTtDQ0dIO0FEREQ7RUFDSSx3Q0FBQTtDQ0dIO0FEREQ7RUFDSSx3Q0FBQTtFQUNBLDhCQUFBO0NDR0giLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcmV2aWV3L3NpbmdsZS1yZXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zaW5nbGVSZXZpZXcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDAgMCA1cHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrLCAwIDAgMTVweCBibGFjaywgMCAwIDIwcHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5yZXZpZXcge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAucmV2aWV3ZXJOYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5yZWxhdGlvbnNoaXAge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4uc3R1ZGlvUGljMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9zdHVkaW9QaWMxLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwMHB4O1xufVxuLnN0dWRpb1BpYzIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMi5qcGcnKTtcbn1cbi5zdHVkaW9QaWMzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3N0dWRpb1BpYzMuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTUwcHg7XG59IiwiLnNpbmdsZVJldmlldyB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDAgMCA1cHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrLCAwIDAgMTVweCBibGFjaywgMCAwIDIwcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLnNpbmdsZVJldmlldyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpbmdsZVJldmlldyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLnNpbmdsZVJldmlldyAucmV2aWV3IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaW5nbGVSZXZpZXcgLnJldmlld2VyTmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNpbmdsZVJldmlldyAucmVsYXRpb25zaGlwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3R1ZGlvUGljMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjAwcHg7XG59XG4uc3R1ZGlvUGljMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMi5qcGcnKTtcbn1cbi5zdHVkaW9QaWMzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9zdHVkaW9QaWMzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/single-review/single-review.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/single-review/single-review.component.ts ***!
  \**********************************************************/
/*! exports provided: SingleReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleReviewComponent", function() { return SingleReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _review_backgrounds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../review-backgrounds.service */ "./src/app/review-backgrounds.service.ts");



var SingleReviewComponent = /** @class */ (function () {
    function SingleReviewComponent(backgroundServ) {
        this.backgroundServ = backgroundServ;
        this.backgroundImgClass = this.backgroundServ.pickImage();
    }
    SingleReviewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SingleReviewComponent.prototype, "reviewer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SingleReviewComponent.prototype, "relationship", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SingleReviewComponent.prototype, "review", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SingleReviewComponent.prototype, "reviewId", void 0);
    SingleReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-review',
            template: __webpack_require__(/*! ./single-review.component.html */ "./src/app/single-review/single-review.component.html"),
            styles: [__webpack_require__(/*! ./single-review.component.less */ "./src/app/single-review/single-review.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_review_backgrounds_service__WEBPACK_IMPORTED_MODULE_2__["ReviewBackgroundsService"]])
    ], SingleReviewComponent);
    return SingleReviewComponent;
}());



/***/ }),

/***/ "./src/app/site-notices/site-notices.component.html":
/*!**********************************************************!*\
  !*** ./src/app/site-notices/site-notices.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"siteNoticesContent hidden\" id=\"siteNoticesContent\">\n\n  <div class=\"text\">\n    Visitors of the site agree to allow Miles Ahead Music to gather analytical \n    information on internet connections visiting the site, via Google Analytics, for the purposes \n    of traffic monitoring, security as well as advertising. Data collected is anonymous and does \n    not link to any kind of personally identifiable information.\n    <br><br>\n    The Google Analytics advertising features currently used by Miles Ahead Music are as follows: \n    Display and search remarketing - This includes data from Google's signed-in users who \n    have chosen to enable Google to associate their web and app browsing history with their \n    Google account, and to use such information from their Google account to personalize ads. \n    Audience demographics and interests reporting. Campaign manager reporting. Display and Video \n    360 reporting. Google Display Network Impression Reporting.\n    <br><br>\n    If you would like to opt-out of data collection by Google Analytics, \n    click <a href=\"https://tools.google.com/dlpage/gaoptout/\" target=\"_blank\">here</a>.\n    <br><br>\n    <div class=\"exitBtn\" (click)=\"exitSiteNotices()\">\n      X\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/site-notices/site-notices.component.less":
/*!**********************************************************!*\
  !*** ./src/app/site-notices/site-notices.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".siteNoticesContent {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 50;\n  overflow: scroll;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-family: 'Quicksand', sans-serif;\n}\n.siteNoticesContent .text {\n  width: 60%;\n}\n@media screen and (max-width: 500px) {\n  .siteNoticesContent .text {\n    width: 80%;\n  }\n}\n.siteNoticesContent .text a {\n  color: white;\n}\n.siteNoticesContent .text .exitBtn {\n  height: 35px;\n  width: 30px;\n  font-size: 30px;\n  cursor: pointer;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC9zaXRlLW5vdGljZXMvc2l0ZS1ub3RpY2VzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaXRlLW5vdGljZXMvc2l0ZS1ub3RpY2VzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7Q0NDSDtBRFpEO0VBY1EsV0FBQTtDQ0NQO0FEQ087RUFBQTtJQUNJLFdBQUE7R0NFVDtDQUNGO0FEcEJEO0VBb0JZLGFBQUE7Q0NHWDtBRHZCRDtFQXdCWSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7Q0NFWDtBREVEO0VBQ0ksY0FBQTtDQ0FIIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS1ub3RpY2VzL3NpdGUtbm90aWNlcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlTm90aWNlc0NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAuODUpO1xuICAgIHotaW5kZXg6IDUwO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4aXRCdG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwiLnNpdGVOb3RpY2VzQ29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICB6LWluZGV4OiA1MDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xufVxuLnNpdGVOb3RpY2VzQ29udGVudCAudGV4dCB7XG4gIHdpZHRoOiA2MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuc2l0ZU5vdGljZXNDb250ZW50IC50ZXh0IHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uc2l0ZU5vdGljZXNDb250ZW50IC50ZXh0IGEge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2l0ZU5vdGljZXNDb250ZW50IC50ZXh0IC5leGl0QnRuIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/site-notices/site-notices.component.ts":
/*!********************************************************!*\
  !*** ./src/app/site-notices/site-notices.component.ts ***!
  \********************************************************/
/*! exports provided: SiteNoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteNoticesComponent", function() { return SiteNoticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SiteNoticesComponent = /** @class */ (function () {
    function SiteNoticesComponent() {
    }
    SiteNoticesComponent.prototype.ngOnInit = function () {
    };
    SiteNoticesComponent.prototype.exitSiteNotices = function () {
        document.getElementById('siteNoticesContent').classList.add('hidden');
    };
    SiteNoticesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-notices',
            template: __webpack_require__(/*! ./site-notices.component.html */ "./src/app/site-notices/site-notices.component.html"),
            styles: [__webpack_require__(/*! ./site-notices.component.less */ "./src/app/site-notices/site-notices.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiteNoticesComponent);
    return SiteNoticesComponent;
}());



/***/ }),

/***/ "./src/app/teacher-display/teacher-display.component.html":
/*!****************************************************************!*\
  !*** ./src/app/teacher-display/teacher-display.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardViewport\" id=\"cardViewport\">\n  <div class=\"item\" id=\"{{teacher.id}}\" *ngFor=\"let teacher of teachers\">\n    <div>\n      <div class=\"instructorPhoto {{teacher.id}}\">\n\n      </div>\n      <div class=\"instructorName\">\n          {{teacher.name}}\n      </div>\n      <div class=\"instructorDesc\">\n          {{teacher.whatDo}}\n      </div>\n      <div class=\"seeBioBtn\" (click)=\"displayTeacherBio(teacher.id)\">\n          \n      </div>\n    </div>\n\n    <!-- teacher bio display  -->\n    <div class=\"bioView hidden\" id=\"{{teacher.id}}Bio\" *ngFor=\"let teacher of teachers\">\n      <div class=\"bioContainer\">\n        <div class=\"photo\" id=\"{{teacher.id}}BioPhoto\">\n    \n        </div>\n        <div class=\"name\">\n          {{teacher.name}}\n        </div>\n        <div class=\"skills\">\n          {{teacher.whatDo}}\n        </div>\n        <div class=\"bio\">\n          {{teacher.bio}}\n          \n        </div>\n        <div class=\"exitBtn\" (click)=\"hideTeacherBio(teacher.id)\">\n          X\n        </div>\n      <div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teacher-display/teacher-display.component.less":
/*!****************************************************************!*\
  !*** ./src/app/teacher-display/teacher-display.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardViewport {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.cardViewport .item {\n  height: 350px;\n  width: 300px;\n  position: static;\n  display: flex;\n  margin: 20px;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  text-align: center;\n  text-shadow: 0 0 3px black;\n  border-radius: 5px;\n  transition: 0.2s;\n  background-image: linear-gradient(#383535, #1f1d1d);\n}\n@media screen and (min-width: 1200px) {\n  .cardViewport .item {\n    height: 500px;\n    width: 300px;\n  }\n}\n.cardViewport .item .instructorPhoto {\n  height: 150px;\n  width: 150px;\n  background-size: cover;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.cardViewport .item .jadenbueno {\n  background-image: url('jadenbueno.png');\n}\n.cardViewport .item .laurenmalouf {\n  background-image: url('laurenmalouf.png');\n}\n.cardViewport .item .jasonfullmer {\n  background-image: url('jasonfullmer.png');\n}\n.cardViewport .item .davidallen {\n  background-image: url('davidallen.png');\n}\n.cardViewport .item .madisonmoline {\n  background-image: url('madisonmoline.png');\n}\n.cardViewport .item .jenniferwilliamson {\n  background-image: url('jenniferwilliamson.png');\n}\n.cardViewport .item .kellyoja {\n  background-image: url('kellyoja.png');\n}\n.cardViewport .item .nataliebrowning {\n  background-image: url('nataliebrowning.png');\n}\n.cardViewport .item .mitchellromney {\n  background-image: url('mitchellromney.png');\n}\n.cardViewport .item .myleslawrence {\n  background-image: url('myleslawrence.png');\n}\n.cardViewport .item .caleegardner {\n  background-image: url('caleegardner.png');\n}\n.cardViewport .item .seeBioBtn {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  margin-top: 20px;\n  background-image: url('menuIcon.png');\n  background-size: cover;\n  cursor: pointer;\n}\n.cardViewport .item .bioView {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  overflow: scroll;\n}\n.cardViewport .item .bioView .bioContainer {\n  width: 60%;\n  margin: 0 auto;\n  margin-top: 170px;\n  margin-bottom: 50px;\n}\n@media screen and (max-width: 1000px) {\n  .cardViewport .item .bioView .bioContainer {\n    width: 80%;\n  }\n}\n.cardViewport .item .bioView .bioContainer .photo {\n  height: 200px;\n  width: 200px;\n  background-size: cover;\n  margin: 0 auto;\n  margin-bottom: 30px;\n}\n.cardViewport .item .bioView .bioContainer #jadenbuenoBioPhoto {\n  background-image: url('jadenbueno.png');\n}\n.cardViewport .item .bioView .bioContainer #laurenmaloufBioPhoto {\n  background-image: url('laurenmalouf.png');\n}\n.cardViewport .item .bioView .bioContainer #jasonfullmerBioPhoto {\n  background-image: url('jasonfullmer.png');\n}\n.cardViewport .item .bioView .bioContainer #davidallenBioPhoto {\n  background-image: url('davidallen.png');\n}\n.cardViewport .item .bioView .bioContainer #madisonmolineBioPhoto {\n  background-image: url('madisonmoline.png');\n}\n.cardViewport .item .bioView .bioContainer #jenniferwilliamsonBioPhoto {\n  background-image: url('jenniferwilliamson.png');\n}\n.cardViewport .item .bioView .bioContainer #kellyojaBioPhoto {\n  background-image: url('kellyoja.png');\n}\n.cardViewport .item .bioView .bioContainer #nataliebrowningBioPhoto {\n  background-image: url('nataliebrowning.png');\n}\n.cardViewport .item .bioView .bioContainer #mitchellromneyBioPhoto {\n  background-image: url('mitchellromney.png');\n}\n.cardViewport .item .bioView .bioContainer #myleslawrenceBioPhoto {\n  background-image: url('myleslawrence.png');\n}\n.cardViewport .item .bioView .bioContainer #caleegardnerBioPhoto {\n  background-image: url('caleegardner.png');\n}\n.cardViewport .item .bioView .bioContainer .name {\n  font-size: 40px;\n  margin-bottom: 5px;\n}\n.cardViewport .item .bioView .bioContainer .skills {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.cardViewport .item .bioView .bioContainer .exitBtn {\n  height: 30px;\n  width: 30px;\n  margin-top: 30px;\n  margin-bottom: 50px;\n  font-size: 30px;\n  cursor: pointer;\n}\n.cardViewport .item .hidden {\n  display: none;\n}\n@media screen and (max-width: 1200px) {\n  .cardViewport .scaled {\n    transform: scale(1.15);\n    transition: 0.2s;\n  }\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtTmcvc3JjL2FwcC90ZWFjaGVyLWRpc3BsYXkvdGVhY2hlci1kaXNwbGF5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90ZWFjaGVyLWRpc3BsYXkvdGVhY2hlci1kaXNwbGF5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtDQ0NIO0FEUEQ7RUFVUSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7Q0NBUDtBRElPO0VBQUE7SUFFSSxjQUFBO0lBQ0EsYUFBQTtHQ0ZUO0NBQ0Y7QUQ1QkQ7RUFtQ1ksY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtDQ0pYO0FEbkNEO0VBMENZLHdDQUFBO0NDSlg7QUR0Q0Q7RUE2Q1ksMENBQUE7Q0NKWDtBRHpDRDtFQWdEWSwwQ0FBQTtDQ0pYO0FENUNEO0VBbURZLHdDQUFBO0NDSlg7QUQvQ0Q7RUFzRFksMkNBQUE7Q0NKWDtBRGxERDtFQXlEWSxnREFBQTtDQ0pYO0FEckREO0VBNERZLHNDQUFBO0NDSlg7QUR4REQ7RUErRFksNkNBQUE7Q0NKWDtBRDNERDtFQWtFWSw0Q0FBQTtDQ0pYO0FEOUREO0VBcUVZLDJDQUFBO0NDSlg7QURqRUQ7RUF3RVksMENBQUE7Q0NKWDtBRHBFRDtFQTJFWSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtDQ0pYO0FEN0VEO0VBcUZZLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtDQ0xYO0FEdkZEO0VBa0dnQixXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7Q0NSZjtBREVlO0VBQUE7SUFDSSxXQUFBO0dDQ2pCO0NBQ0Y7QURsR0Q7RUF3R29CLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7Q0NIbkI7QUR6R0Q7RUFnSG9CLHdDQUFBO0NDSm5CO0FENUdEO0VBbUhvQiwwQ0FBQTtDQ0puQjtBRC9HRDtFQXNIb0IsMENBQUE7Q0NKbkI7QURsSEQ7RUF5SG9CLHdDQUFBO0NDSm5CO0FEckhEO0VBNEhvQiwyQ0FBQTtDQ0puQjtBRHhIRDtFQStIb0IsZ0RBQUE7Q0NKbkI7QUQzSEQ7RUFrSW9CLHNDQUFBO0NDSm5CO0FEOUhEO0VBcUlvQiw2Q0FBQTtDQ0puQjtBRGpJRDtFQXdJb0IsNENBQUE7Q0NKbkI7QURwSUQ7RUEySW9CLDJDQUFBO0NDSm5CO0FEdklEO0VBOElvQiwwQ0FBQTtDQ0puQjtBRDFJRDtFQWtKb0IsZ0JBQUE7RUFDQSxtQkFBQTtDQ0xuQjtBRDlJRDtFQXNKb0IsZ0JBQUE7RUFDQSxvQkFBQTtDQ0xuQjtBRGxKRDtFQThKb0IsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtDQ1RuQjtBRDFKRDtFQXdLWSxjQUFBO0NDWFg7QURnQkc7RUFBQTtJQUVRLHVCQUFBO0lBQ0EsaUJBQUE7R0NkVDtDQUNGO0FEa0JEO0VBQ0ksY0FBQTtDQ2hCSCIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItZGlzcGxheS90ZWFjaGVyLWRpc3BsYXkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFZpZXdwb3J0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcblxuICAgIC5pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDU2LCA1MywgNTMpLCByZ2IoMzEsIDI5LCAyOSkpO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnN0cnVjdG9yUGhvdG8ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmphZGVuYnVlbm97XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qYWRlbmJ1ZW5vLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAubGF1cmVubWFsb3VmIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2xhdXJlbm1hbG91Zi5wbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgLmphc29uZnVsbG1lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qYXNvbmZ1bGxtZXIucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIC5kYXZpZGFsbGVuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2RhdmlkYWxsZW4ucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIC5tYWRpc29ubW9saW5lIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21hZGlzb25tb2xpbmUucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIC5qZW5uaWZlcndpbGxpYW1zb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvamVubmlmZXJ3aWxsaWFtc29uLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAua2VsbHlvamEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEva2VsbHlvamEucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIC5uYXRhbGllYnJvd25pbmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbmF0YWxpZWJyb3duaW5nLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAubWl0Y2hlbGxyb21uZXkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWl0Y2hlbGxyb21uZXkucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIC5teWxlc2xhd3JlbmNlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL215bGVzbGF3cmVuY2UucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIC5jYWxlZWdhcmRuZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvY2FsZWVnYXJkbmVyLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAuc2VlQmlvQnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWVudUljb24ucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaW9WaWV3IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgICAgICAgICAuYmlvQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgICAgICAgICAucGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpbmRpdmlkdWFsIHRlYWNoZXIgcGhvdG9zIGZvciBiaW8gZGlzcGxheVxuICAgICAgICAgICAgICAgICNqYWRlbmJ1ZW5vQmlvUGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qYWRlbmJ1ZW5vLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2xhdXJlbm1hbG91ZkJpb1Bob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbGF1cmVubWFsb3VmLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2phc29uZnVsbG1lckJpb1Bob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvamFzb25mdWxsbWVyLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2RhdmlkYWxsZW5CaW9QaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2RhdmlkYWxsZW4ucG5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjbWFkaXNvbm1vbGluZUJpb1Bob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWFkaXNvbm1vbGluZS5wbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNqZW5uaWZlcndpbGxpYW1zb25CaW9QaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2plbm5pZmVyd2lsbGlhbXNvbi5wbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNrZWxseW9qYUJpb1Bob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEva2VsbHlvamEucG5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjbmF0YWxpZWJyb3duaW5nQmlvUGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9uYXRhbGllYnJvd25pbmcucG5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjbWl0Y2hlbGxyb21uZXlCaW9QaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pdGNoZWxscm9tbmV5LnBuZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI215bGVzbGF3cmVuY2VCaW9QaG90byB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL215bGVzbGF3cmVuY2UucG5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjY2FsZWVnYXJkbmVyQmlvUGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9jYWxlZWdhcmRuZXIucG5nXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5za2lsbHMge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5iaW8ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leGl0QnRuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgLnNjYWxlZCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi5jYXJkVmlld3BvcnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMzgzNTM1LCAjMWYxZDFkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY2FyZFZpZXdwb3J0IC5pdGVtIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuaW5zdHJ1Y3RvclBob3RvIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmphZGVuYnVlbm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qYWRlbmJ1ZW5vLnBuZ1wiKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmxhdXJlbm1hbG91ZiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2xhdXJlbm1hbG91Zi5wbmdcIik7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5qYXNvbmZ1bGxtZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qYXNvbmZ1bGxtZXIucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuZGF2aWRhbGxlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2RhdmlkYWxsZW4ucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAubWFkaXNvbm1vbGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21hZGlzb25tb2xpbmUucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuamVubmlmZXJ3aWxsaWFtc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvamVubmlmZXJ3aWxsaWFtc29uLnBuZ1wiKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmtlbGx5b2phIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEva2VsbHlvamEucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAubmF0YWxpZWJyb3duaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbmF0YWxpZWJyb3duaW5nLnBuZ1wiKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLm1pdGNoZWxscm9tbmV5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWl0Y2hlbGxyb21uZXkucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAubXlsZXNsYXdyZW5jZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL215bGVzbGF3cmVuY2UucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuY2FsZWVnYXJkbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvY2FsZWVnYXJkbmVyLnBuZ1wiKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLnNlZUJpb0J0biB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9tZW51SWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmJpb1ZpZXcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmJpb1ZpZXcgLmJpb0NvbnRhaW5lciB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY2FyZFZpZXdwb3J0IC5pdGVtIC5iaW9WaWV3IC5iaW9Db250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmJpb1ZpZXcgLmJpb0NvbnRhaW5lciAucGhvdG8ge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyICNqYWRlbmJ1ZW5vQmlvUGhvdG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qYWRlbmJ1ZW5vLnBuZ1wiKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmJpb1ZpZXcgLmJpb0NvbnRhaW5lciAjbGF1cmVubWFsb3VmQmlvUGhvdG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9sYXVyZW5tYWxvdWYucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyICNqYXNvbmZ1bGxtZXJCaW9QaG90byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2phc29uZnVsbG1lci5wbmdcIik7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5iaW9WaWV3IC5iaW9Db250YWluZXIgI2RhdmlkYWxsZW5CaW9QaG90byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2RhdmlkYWxsZW4ucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyICNtYWRpc29ubW9saW5lQmlvUGhvdG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9tYWRpc29ubW9saW5lLnBuZ1wiKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmJpb1ZpZXcgLmJpb0NvbnRhaW5lciAjamVubmlmZXJ3aWxsaWFtc29uQmlvUGhvdG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9qZW5uaWZlcndpbGxpYW1zb24ucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyICNrZWxseW9qYUJpb1Bob3RvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEva2VsbHlvamEucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyICNuYXRhbGllYnJvd25pbmdCaW9QaG90byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL25hdGFsaWVicm93bmluZy5wbmdcIik7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5iaW9WaWV3IC5iaW9Db250YWluZXIgI21pdGNoZWxscm9tbmV5QmlvUGhvdG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9taXRjaGVsbHJvbW5leS5wbmdcIik7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5iaW9WaWV3IC5iaW9Db250YWluZXIgI215bGVzbGF3cmVuY2VCaW9QaG90byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL215bGVzbGF3cmVuY2UucG5nXCIpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyICNjYWxlZWdhcmRuZXJCaW9QaG90byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2NhbGVlZ2FyZG5lci5wbmdcIik7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5iaW9WaWV3IC5iaW9Db250YWluZXIgLm5hbWUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLmJpb1ZpZXcgLmJpb0NvbnRhaW5lciAuc2tpbGxzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuYmlvVmlldyAuYmlvQ29udGFpbmVyIC5leGl0QnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJkVmlld3BvcnQgLnNjYWxlZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/teacher-display/teacher-display.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher-display/teacher-display.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherDisplayComponent", function() { return TeacherDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeacherDisplayComponent = /** @class */ (function () {
    function TeacherDisplayComponent() {
        this.teachers = [{
                "name": "Jaden Bueno",
                "whatDo": "Trumpet",
                "id": "jadenbueno",
                "bio": "Jaden began playing trumpet at the age of 12, and quickly established himself \n    in the band programs he participated in.\u00A0 In high school, he joined Caleb Chapman's \n    Soundhouse and performed with the top group, the Crescent Super Band, for a packed house \n    at Carnegie Hall in 2013. Jaden has had the opportunity to share the stage with the likes \n    of Wayne Bergeron, Wycliffe Gordon, David Sanborn, Jeff Coffin, Randy Brecker, Ed Calle, \n    Rashawn Ross, and many more. He has also played with members of Toto, Tower of Power, \n    Gordon Goodwin\u2019s Big Phat Band, the Yellowjackets, Neon Trees and others. With the \n    Soundhouse, he has traveled and performed in Mexico, Croatia, Spain, New Orleans, \n    San Francisco, New York and major festivals around the globe. He has been awarded 5 \n    Downbeat awards for his work as a performer and a producer. Jaden is currently majoring \n    in Trumpet Performance and Commercial Music at Utah Valley University. Jaden is a very \n    active performer and educator across the state of Utah."
            },
            {
                "name": "Lauren Malouf",
                "whatDo": "Piano",
                "id": "laurenmalouf",
                "bio": "Lauren Malouf grew up in the Seattle area, where she started playing piano at age four.\u00A0\n    One of her biggest inspirations and mentors in her pursuit of music was her own mother, a professional \n    pianist.\u00A0\u00A0In junior high school, Lauren began studying with renowned pianist and teacher Sasha Starcevich \n    and participating in MTNA competitions and other music festivals.\u00A0\u00A0Music is her greatest passion, and she \n    began teaching piano at age 12.\u00A0In 2015, Lauren began her undergraduate studies in piano performance at \n    Utah State University, where she studied with Gary Amano.\u00A0\u00A0She was also privately mentored and coached in \n    her teaching from various professional musicians in USU\u2019s Youth Conservatory program and became one of \n    their most requested teachers.\u00A0\u00A0Currently, Lauren studies piano performance as a full scholarship student \n    at Utah Valley University under Dr. Hilary Demske.\u00A0\u00A0Besides performing and teaching, she also enjoys \n    collaborative piano and playing piano with orchestras, vocalists, and instrumentalists, and she plans on \n    pursuing a doctoral degree in piano performance.\u00A0\u00A0Aside from playing the piano, Lauren enjoys running, \n    singing, hiking, reading, and spending time with her family and friends."
            },
            {
                "name": "Jason Fullmer",
                "whatDo": "Guitar/Banjo",
                "id": "jasonfullmer",
                "bio": "Jason Kelly Fullmer is a fretted instrument specialist, playing professionally on guitar, \n    bass, mandolin, ukulele, and banjo.\u00A0He has played with the Utah Symphony and Opera, the Salt Lake \n    Pops Orchestra and Elacor. He has toured the country playing in different bands, and has taken \n    his solo show to England, Italy, France, and Iceland\u2026 so far.\u00A0He is currently the guitarist for \n    the Chrome Street Quartet and the frontman of the funky jam band Night Sky Supernova.\u00A0"
            },
            {
                "name": "David Allen",
                "whatDo": "Trombone",
                "id": "davidallen",
                "bio": "From Albany, Oregon, David Allen is a senior at BYU. He studied Trombone Performance with \n    Dr. Will Kimball before transitioning to the Commercial Music program. David has now worked for \n    four years as the Assistant to the Band Director for the BYU Young Ambassadors and has toured \n    with the group to Brazil, Arizona and most recently, China. In addition to arranging music for \n    the YA's, he also does much of the music for the BYU A Cappella Club group, 1AChord, which he has \n    helped direct since he formed it in 2015. In addition to the Young Ambassadors Show Band and \n    1AChord, he has performed with many BYU ensembles including Synthesis, Wind Ensemble, Symphony \n    Orchestra, Symphonic Band, Marching Band, Pep Band, Jazz Ensemble, and the Trombone Choir. David \n    has also recently started\u00A0working as a Recording Studio TA on campus before he graduates in April."
            },
            {
                "name": "Madison Moline",
                "whatDo": "Violin/Viola",
                "id": "madisonmoline",
                "bio": "Madison is a senior at BYU studying music education and viola performance. She has recently \n    been principal violist of the BYU Philharmonic and a member of a successful piano quintet at BYU. \n    In highschool, Madison was the top violist in Arkansas for 2 years, and as a senior was accepted \n    as one of the 16 violists across the US to be a member of the National Youth Orchestra of the USA. \n    There she gained connections with the top young musicians in the US and China, toured 7 cities in \n    China, and worked with many world-renowned artists. Since coming to BYU, Madison has been apart of \n    both of the BYU orchestras and has been on tour with the chamber orchestra to the Philippines. \n    She has had many solo performance opportunities such as performing the western US premiere of \n    Ballast, a work by David Liptak, with Dr. Mathias, a BYU organ faculty member. She has been \n    associate principal in the BYU Chamber Orchestra while accompanying artists including Jordan \n    Smith, Amy Grant, and Lea Salonga. Madison has played in masterclasses for the Utah Viola Society, \n    the Primrose Memorial Concert, and at Domaine Forget (a summer festival in Quebec) for artists \n    including: Neithard Rosa (previous principal violist of the Berlin Philharmonic), Misha Amory \n    (Juilliard professor), Atar Arad (world famous teacher at \u00A0Indiana University), and many more. \n    Madison loves performing in both full orchestras as well as small chamber groups, and enjoys teaching \n    students of all ages and levels. She would love to help you with your solo and ensemble, Region, or \n    State music this summer!"
            },
            {
                "name": "Jennifer Williamson",
                "whatDo": "Voice & Piano",
                "id": "jenniferwilliamson",
                "bio": "Jennifer Williamson is a professional, experienced vocal and piano teacher for 25 years. She \n    received her Bachelors Degree in Music Education with Choral and Instrumental emphasis at the \n    University of Utah. She also is currently working on a Masters in Education from ASU. Jennifer is \n    a National level teacher in the (NATS)National Association of Teachers of Singing affiliation. Her \n    Vocal students compete yearly and place 1st-3rd in Classical and Musical Theatre Competitions at BYU \n    and the University of Utah currently and since 2005. Jennifer has performed lead vocal roles at the \n    U of U in Puccini Opera performances as well as lead theatre roles for ACT back in the day. She is \n    a professional experienced vocal soloist that performs locally on a regular basis. She currently \n    directs and teaches a successful music studio in Cedar Hills. Jennifer is also an accomplished pianist \n    that studied at BYU Idaho. Her piano students receive superior ratings at the Utah Federation of Music \n    Festivals. She has accompanied choirs and vocal soloists for 25 years. Jennifer has directed and taught \n    Choir, Theatre, Band, Orchestra for 4 years in charter and public school systems. She is a talented, \n    passionate educator and takes great pride in her students' success."
            },
            {
                "name": "Kelly Oja",
                "whatDo": "Bass",
                "id": "kellyoja",
                "bio": "Kelly graduated from Brigham Young University in 2018 with a Bachelor of Music degree in Bass \n    Performance. While attending she performed with numerous jazz combos, local pit orchestras, various \n    rock/indie bands, BYU\u2019s Philharmonic and Chamber Orchestra, American West Symphony, Jazz Voices, Young \n    Ambassadors, Wind Ensemble, and Synthesis. After graduation, Kelly spent a year pursuing a \n    master\u2019s degree in\u00A0 jazz at New York University in Manhattan. While in New York, she performed \n    with many jazz groups at different NYC venues in addition to subbing for pit orchestras and laying \n    down bass tracks in the recording studio.If Kelly isn\u2019t writing, arranging, teaching or \n    performing music, you can find her in the great outdoors, reading, or catching up on the latest Star \n    Wars canon."
            },
            {
                "name": "Natalie Browning",
                "whatDo": "Cello",
                "id": "nataliebrowning",
                "bio": "Natalie Browning received a Bachelor of Music degree in cello performance from Utah Valley \n    University, studying under Dr. Cheung Chau. She has held the position of principal cellist of the \n    symphony and chamber orchestras at UVU, and was the recipient of the Exceptional Performance, the \n    Rebecca Marriott Champion String Endowed, and the Music Resident scholarships for cello at UVU. \n    She was also selected by the UVU Department of Music to receive their prestigious Award of Merit \n    in Music Performance for 2018-2019.Natalie has performed with a wide variety of groups \n    as a cellist, including the Utah All-State Orchestra, UVU's symphony and chamber orchestras, \n    jazz band, percussion ensemble and cello choir, the Solstice Singers vocal group based in Orem Utah, \n    and the Brigham Young University Opera. She was also the cellist for the world premiere of pre-Broadway \n    musical \"Fly More Than You Fall,\" starring Sony- and Paradigm Talent Agency-signed artist Lexi Walker. \n    She has also recorded for multiple student compositions and projects.She was a participant \n    of the International Musicians Academy 2019 in Bulgaria, where she soloed with the Vidin State \n    Sinfonietta and performed in masterclasses and ensembles with internationally-known cellists Ovidiu \n    Marinescu and Cheung Chau, and violinist Blanka Bednarz. She also performed as a guest with the \n    Sinfonietta Polonia for their New Year's program in 2020 where they performed in venues in Obra, \n    Grodzisk Wielkopolski, Pi\u0142a, Pleszew, Warsaw, and Pozna\u0144 on their tour of the Greater Poland area."
            },
            {
                "name": "Mitchell Romney",
                "whatDo": "Drums",
                "id": "mitchellromney",
                "bio": "Mitchell Romney teaches drums and percussion. He was born and raised in Craig, Colorado where \n    he began drumming at 11 years old. He is a senior studying Percussion Performance at BYU. In his time \n    at BYU he has played with the BYU Philharmonic, Wind Symphony, Percussion Ensemble, Panoramic Steel, \n    BYU Synthesis, and other jazz ensembles. Highlights from his time at BYU include a 2014 tour to Thailand, \n    Cambodia, and Vietnam with the Young Ambassadors and a recent tour to Puerto Rico, the Dominican Republic, \n    and Cuba with Synthesis. He also works as an accompanist for the BYU Contemporary Dance department. \n    Outside of school, he enjoys playing and recording with local artists and bands. Mitch plays a variety \n    of styles on drum set\u2013jazz, latin, funk, pop, indie, hip-hop, country, folk, classic rock, punk, metal, \n    and progressive rock to name a few, as well as orchestral and solo percussion. He also has a particular \n    love for hand drumming and loves to learn about drums from around the world, especially West Africa, \n    the Caribbean, and the Middle East."
            },
            {
                "name": "Myles Lawrence",
                "whatDo": "Saxophone & Clarinet",
                "id": "myleslawrence",
                "bio": "Myles Lawrence studied Jazz at Brigham Young University with a Saxophone and Clarient emphasis. \n    Myles has played all over the world with big names like Sting, Neon Trees, Kelly Clarkson and many others. \n    He is a member of the well known band the Strike. Myles can be found in Dubai, China and LA frequently \n    playing with the Strike but one of his biggest passions is teaching his private students not only skills \n    related to pop and jazz but also classical. Myles is a wonderful classical saxophone and clarinet player \n    and has helped many students prepare for college auditions and state competitions. Myles is extremely \n    high in demand, learn with him today!"
            },
            {
                "name": "Calee Gardner",
                "whatDo": "Voice & Acting",
                "id": "caleegardner",
                "bio": "Calee Gardner, a local grown gal, has been singing and performing since she was small. Part of \n    the 2020 Graduating Class Calee has worked for a BFA in the Music Dance Theater Program at BYU. Calee \n    has been coaching voice and audition preparation for the last two years and loves to help students \n    discover their voice.Her work in theater and music has allowed performances both locally and \n    internationally. Performed and presented at the 2018\u00A0IUGTE Physical Theater Conference in Leibniz \n    Austria and took honors in the Utah Fringe theater festival. Calee has performed lead roles in the \n    Utah theater community including the Hale Center Theater, with Renaissance Now, the musical Improv \n    main cast at Improv Broadway, and as a soloist in the Scera Theater Night of Broadway. Calee also \n    served as a Young performing Missionary in Nauvoo Illinois as a stage performer, singing in dancing \n    in seven shows per day."
            }];
    }
    TeacherDisplayComponent.prototype.ngOnInit = function () {
    };
    TeacherDisplayComponent.prototype.displayTeacherBio = function (teacherID) {
        document.getElementById(teacherID + "Bio").classList.remove('hidden');
    };
    TeacherDisplayComponent.prototype.hideTeacherBio = function (teacherID) {
        document.getElementById(teacherID + "Bio").classList.add('hidden');
    };
    TeacherDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-display',
            template: __webpack_require__(/*! ./teacher-display.component.html */ "./src/app/teacher-display/teacher-display.component.html"),
            styles: [__webpack_require__(/*! ./teacher-display.component.less */ "./src/app/teacher-display/teacher-display.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeacherDisplayComponent);
    return TeacherDisplayComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jacobbaldwin/freelanceWork/MilesAheadMusic-Ng/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map