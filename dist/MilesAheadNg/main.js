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

module.exports = "<div class=\"content\">\n  <div class=\"introduction\">\n      <div class=\"schoolName\">\n          Miles Ahead Music\n      </div>\n      <div class=\"vidHeader\">\n        Introduction Video\n      </div>\n      <div class=\"aboutVid\">\n        <video autobuffer playsinline id=\"aboutUsVid\" [muted]=\"false\" controls>\n            <source src=\"../../assets/site-media/Miles Ahead Music Draft 2.mp4\">\n        </video>\n      </div>\n      <div class=\"introText\">\n          Our experienced staff members teach private music lessons and provide many performance \n          opportunities through jazz combos, vocal quartets and chamber groups. Our teachers are \n          all extremely qualified, having received or are about to receive degrees in music. Some \n          have masters degrees in music as well. We offer high quality lessons for an affordable \n          price so that students can grow miles ahead from the get go.\n      </div>\n  </div>\n  <div class=\"topic\" id=\"whatWeTeach\">\n      <div class=\"icon\">\n          \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              What We Teach\n          </div>\n          <div class=\"text\">\n              Whether you want to learn works by Beethoven or the Beatles, church hymns or AC/DC hits \n              you’ve come to the right place! Our teachers are all versatile, mastering genres such as: \n              classical, pop, jazz, rock, indie and more. We realize that every student is different \n              and want to help you become what YOU want to become!\n          </div>\n      </div>\n  </div>\n  <div class=\"topic\" id=\"easyForParents\">\n      <div class=\"icon\">\n  \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              We Make it Easy For Parents\n          </div>\n          <div class=\"text\">\n              We strive to help busy parents have an easy way to get their kids involved in music by \n              choosing great teachers and making scheduling easy. We know how hard it is to find the best \n              teacher at a reasonable price, so we hand picked the best around just for you!\n          </div>\n      </div>\n  </div>\n  <div class=\"topic\" id=\"teachers\">\n      <div class=\"icon\">\n  \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              Truly Qualified Teachers\n          </div>\n          <div class=\"text\">\n              All of our teachers are currently pursuing degrees in music or have already received degrees \n              in music. All of them are also active in professional music careers locally and globally. Our \n              teachers have played in Dubai, the Philippines, China, Australia, Thailand, and all over Europe, \n              North and South America! They have shared stages with Kelly Clarkson, Journey, Leann Rimes, \n              Neon Trees and countless jazz and classical legends. Many are in popular bands like the Strike \n              and Speirs. Many play regularly in classical,jazz, pop, or party groups for local events as well.\n          </div>\n      </div>\n  </div>\n  <div class=\"topic\" id=\"community\">\n      <div class=\"icon\">\n      \n      </div>\n      <div class=\"info\">\n          <div class=\"head\">\n              We Support the Community\n          </div>\n          <div class=\"text\">\n              As musicians, we know how hard it is to be successful entrepreneurs and we want to help our \n              local community grow. In order to showcase our local talent we sell local art and promote \n              local businesses.\n          </div>\n      </div>\n  </div>\n  <app-footer-bar></app-footer-bar>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.less":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  position: absolute;\n  top: 100px;\n  z-index: 2;\n}\n.content .introduction {\n  width: 100%;\n}\n.content .introduction .schoolName {\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 50px;\n  font-size: 40px;\n  font-family: 'Julius Sans One', sans-serif;\n}\n.content .introduction .vidHeader {\n  font-family: 'Sacramento', cursive;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 20px;\n}\n.content .introduction .aboutVid {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n@media screen and (min-width: 500px) {\n  .content .introduction .aboutVid {\n    margin-bottom: 50px;\n  }\n}\n.content .introduction .aboutVid #aboutUsVid {\n  width: 300px;\n}\n@media screen and (min-width: 500px) {\n  .content .introduction .aboutVid #aboutUsVid {\n    width: 400px;\n  }\n}\n.content .introduction .introText {\n  margin: 0 auto;\n  width: 90%;\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 40px;\n  font-family: \"Quicksand\", sans-serif;\n}\n.content .topic {\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .topic .icon {\n  height: 50px;\n  width: 50px;\n  margin-right: 30px;\n  margin-left: 20px;\n}\n.content .topic .info {\n  width: calc((100%/3)*2);\n}\n.content .topic .info .head {\n  font-family: \"Sacramento\", cursive;\n  font-size: 30px;\n}\n.content .topic .info .text {\n  font-family: \"Quicksand\", sans-serif;\n  margin-right: 30px;\n}\n.content #whatWeTeach .icon {\n  background-image: url('bookIcon.png');\n  background-size: cover;\n}\n.content #easyForParents .icon {\n  background-image: url('vanIcon.png');\n  background-size: cover;\n}\n.content #teachers .icon {\n  background-image: url('capIcon.png');\n  background-size: cover;\n}\n.content #community .icon {\n  background-image: url('commIcon.png');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NKO0FETEE7RUFPUSxXQUFBO0FDQ1I7QURSQTtFQVVZLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQ0NaO0FEaEJBO0VBa0JZLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRHRCQTtFQXdCWSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDWjtBREFZO0VBQUE7SUFDSSxtQkFBQTtFQ0dkO0FBQ0Y7QURuQ0E7RUFtQ2dCLFlBQUE7QUNHaEI7QURGZ0I7RUFBQTtJQUNJLFlBQUE7RUNLbEI7QUFDRjtBRDNDQTtFQTBDWSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUNJWjtBRG5EQTtFQW1EUSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRDNEQTtFQTJEWSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHWjtBRGpFQTtFQWlFWSx1QkFBQTtBQ0daO0FEcEVBO0VBb0VnQixrQ0FBQTtFQUNBLGVBQUE7QUNHaEI7QUR4RUE7RUF3RWdCLG9DQUFBO0VBQ0Esa0JBQUE7QUNHaEI7QUQ1RUE7RUErRVkscUNBQUE7RUFDQSxzQkFBQTtBQ0FaO0FEaEZBO0VBcUZZLG9DQUFBO0VBQ0Esc0JBQUE7QUNGWjtBRHBGQTtFQTJGWSxvQ0FBQTtFQUNBLHNCQUFBO0FDSlo7QUR4RkE7RUFpR1kscUNBQUE7RUFDQSxzQkFBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIC5zY2hvb2xOYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC52aWRIZWFkZXIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0VmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNhYm91dFVzVmlkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbnRyb1RleHQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50b3BpYyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgd2lkdGg6IH5cImNhbGMoKDEwMCUvMykqMilcIjtcblxuICAgICAgICAgICAgLmhlYWQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNhY3JhbWVudG9cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICN3aGF0V2VUZWFjaCB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2Jvb2tJY29uLnBuZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2Vhc3lGb3JQYXJlbnRzIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvdmFuSWNvbi5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgICN0ZWFjaGVycyB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2NhcEljb24ucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY29tbXVuaXR5IHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvY29tbUljb24ucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRlbnQgLmludHJvZHVjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQgLmludHJvZHVjdGlvbiAuc2Nob29sTmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbn1cbi5jb250ZW50IC5pbnRyb2R1Y3Rpb24gLnZpZEhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRlbnQgLmludHJvZHVjdGlvbiAuYWJvdXRWaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAuaW50cm9kdWN0aW9uIC5hYm91dFZpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufVxuLmNvbnRlbnQgLmludHJvZHVjdGlvbiAuYWJvdXRWaWQgI2Fib3V0VXNWaWQge1xuICB3aWR0aDogMzAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAuaW50cm9kdWN0aW9uIC5hYm91dFZpZCAjYWJvdXRVc1ZpZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG4uY29udGVudCAuaW50cm9kdWN0aW9uIC5pbnRyb1RleHQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRlbnQgLnRvcGljIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudCAudG9waWMgLmljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbnRlbnQgLnRvcGljIC5pbmZvIHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUvMykqMik7XG59XG4uY29udGVudCAudG9waWMgLmluZm8gLmhlYWQge1xuICBmb250LWZhbWlseTogXCJTYWNyYW1lbnRvXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb250ZW50IC50b3BpYyAuaW5mbyAudGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uY29udGVudCAjd2hhdFdlVGVhY2ggLmljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9ib29rSWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCAjZWFzeUZvclBhcmVudHMgLmljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS92YW5JY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50ICN0ZWFjaGVycyAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2NhcEljb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNvbnRlbnQgI2NvbW11bml0eSAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2NvbW1JY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"

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







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
    { path: 'lesson-info', component: _lesson_info_lesson_info_component__WEBPACK_IMPORTED_MODULE_5__["LessonInfoComponent"] },
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

module.exports = "\n\n<app-header-bar class=\"header\"></app-header-bar>\n<router-outlet class=\"router\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  z-index: 1000;\n}\n.router {\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRENBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbi5yb3V0ZXIge1xuICAgIHotaW5kZXg6IDE7XG59IiwiLmhlYWRlciB7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4ucm91dGVyIHtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _bio_display_bio_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bio-display/bio-display.component */ "./src/app/bio-display/bio-display.component.ts");





var config = { url: 'http://3.16.108.177', options: {} };












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
                _bio_display_bio_display_component__WEBPACK_IMPORTED_MODULE_16__["BioDisplayComponent"]
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

/***/ "./src/app/bio-display/bio-display.component.html":
/*!********************************************************!*\
  !*** ./src/app/bio-display/bio-display.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view hidden\" id=\"{{teacher.id}}Bio\" *ngFor=\"let teacher of teachers\">\n  <div class=\"photo\" id=\"{{teacher.id}}BioPhoto\">\n\n  </div>\n  <div class=\"name\">\n    {{teacher.name}}\n  </div>\n  <div class=\"skills\">\n    {{teacher.basicDes}}\n  </div>\n  <div class=\"bio\">\n    {{teacher.bio}}\n\n    <div class=\"exitBtn\" (click)=\"hideTeacherBio(teacher.id)\">\n      X\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/bio-display/bio-display.component.less":
/*!********************************************************!*\
  !*** ./src/app/bio-display/bio-display.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: white;\n  font-family: 'Quicksand', sans-serif;\n  overflow: scroll;\n}\n.view .photo {\n  height: 150px;\n  width: 150px;\n  margin: 0 auto;\n  margin-top: 50px;\n  background-size: cover;\n}\n.view .name {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 20px;\n}\n.view .skills {\n  text-align: center;\n}\n.view .bio {\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 80%;\n}\n@media screen and (min-width: 1201px) {\n  .view .bio {\n    width: 700px;\n    font-size: 20px;\n  }\n  .view .bio .exitBtn {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    font-size: 30px;\n    text-align: right;\n  }\n}\n@media screen and (min-width: 1201px) and screen and (min-width: 1200px) {\n  .view .bio .exitBtn {\n    bottom: 100px;\n    right: 100px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .view .bio .exitBtn {\n    position: relative;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    bottom: 20px;\n    right: 20px;\n    font-size: 30px;\n    text-align: right;\n  }\n}\n@media screen and (max-width: 1200px) and screen and (min-width: 1200px) {\n  .view .bio .exitBtn {\n    bottom: 100px;\n    right: 100px;\n  }\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9iaW8tZGlzcGxheS9iaW8tZGlzcGxheS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYmlvLWRpc3BsYXkvYmlvLWRpc3BsYXkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRFZBO0VBWVEsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0NSO0FEakJBO0VBbUJRLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ1I7QUR0QkE7RUF3QlEsa0JBQUE7QUNDUjtBRHpCQTtFQTJCUSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ1I7QURBUTtFQUFBO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNHVjtFRExNO0lBSVEsa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ0lkO0FBQ0Y7QURKZ0I7RUFBQTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VDT2xCO0FBQ0Y7QURKUTtFQUFBO0lBRVEsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNNZDtBQUNGO0FETmdCO0VBQUE7SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQ1NsQjtBQUNGO0FESEE7RUFDSSxhQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9iaW8tZGlzcGxheS9iaW8tZGlzcGxheS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAucGhvdG8ge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYmlvIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCl7XG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAuZXhpdEJ0biB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgLmV4aXRCdG4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iLCIudmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi52aWV3IC5waG90byB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udmlldyAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnZpZXcgLnNraWxscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi52aWV3IC5iaW8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDgwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xuICAudmlldyAuYmlvIHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC52aWV3IC5iaW8gLmV4aXRCdG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIGFuZCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudmlldyAuYmlvIC5leGl0QnRuIHtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC52aWV3IC5iaW8gLmV4aXRCdG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnZpZXcgLmJpbyAuZXhpdEJ0biB7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICByaWdodDogMTAwcHg7XG4gIH1cbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/bio-display/bio-display.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bio-display/bio-display.component.ts ***!
  \******************************************************/
/*! exports provided: BioDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioDisplayComponent", function() { return BioDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_teacher_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-teacher-list.service */ "./src/app/get-teacher-list.service.ts");



var BioDisplayComponent = /** @class */ (function () {
    function BioDisplayComponent(getTeachers) {
        this.getTeachers = getTeachers;
        this.teachers = this.getTeachers.teachers;
    }
    BioDisplayComponent.prototype.ngOnInit = function () {
    };
    BioDisplayComponent.prototype.hideTeacherBio = function (teacherID) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id == teacherID) {
                document.getElementById(teacherID + "Bio").classList.add('hidden');
            }
        }
    };
    BioDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bio-display',
            template: __webpack_require__(/*! ./bio-display.component.html */ "./src/app/bio-display/bio-display.component.html"),
            styles: [__webpack_require__(/*! ./bio-display.component.less */ "./src/app/bio-display/bio-display.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_teacher_list_service__WEBPACK_IMPORTED_MODULE_2__["GetTeacherListService"]])
    ], BioDisplayComponent);
    return BioDisplayComponent;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formView hidden\" id=\"contactForm\">\n  <div class=\"form\">\n    <div class=\"formHeader\">\n      Contact Form\n    </div>\n    <div class=\"formExplain\">\n      Please fill out the form below, and a member of our staff will personally \n      reach out to you to answer any questions, get you a quote, or to help you \n      get enrolled!\n    </div>\n    <div class=\"parentName\">\n      <div>\n        First Name<br>\n        <div class=\"first\">\n          <input type=\"text\" [(ngModel)]=\"parentFirstName\" height=\"40\">\n        </div>\n        Last <br>\n        <div class=\"last\">\n          <input type=\"text\" [(ngModel)]=\"parentLastName\">\n        </div>\n      </div>\n    </div>\n    <div class=\"phone\">\n      Phone Number\n      <div class=\"phoneNumber\">\n        <input type=\"tel\" [(ngModel)]=\"phoneNum\">\n      </div>\n    </div>\n    <div class=\"email\">\n      Email\n      <div class=\"emailAddress\">\n        <input type=\"email\" [(ngModel)]=\"emailAddress\">\n      </div>\n    </div>\n    <div class=\"studentName\">\n      Student Name (if different)\n      <div>\n        <div class=\"first\">\n          <input type=\"text\" [(ngModel)]=\"studentFirstName\">\n        </div>\n        <div class=\"last\">\n          <input type=\"text\" [(ngModel)]=\"studentLastName\">\n        </div>\n      </div>\n    </div>\n    <div class=\"instrument\">\n      Instrument\n      <div class=\"instrumentEntry\">\n        <input type=\"text\" [(ngModel)]=\"instrument\">\n      </div>\n    </div>\n    <div class=\"pleaseComplete hidden\" id=\"pleaseComplete\">\n      The form is missing information or has errors\n    </div>\n    <div class=\"actions\">\n      <div class=\"submitBtn\" (click)=\"submitForm()\">\n        SUBMIT\n      </div>\n      <div class=\"formStatus hidden\" id=\"formStatus\">\n        Submission successful\n      </div>\n      <div class=\"exitBtn\" (click)=\"hideForm()\">\n        X\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.less":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formView {\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 50;\n  overflow: scroll;\n  display: flex;\n  justify-content: center;\n}\n.formView .form {\n  color: white;\n  font-family: \"Quicksand\", sans-serif;\n  padding: 20px;\n  font-size: 20px;\n}\n@media screen and (min-width: 500px) {\n  .formView .form {\n    width: 350px;\n    margin-top: 100px;\n  }\n}\n.formView .form input {\n  font-size: 20px;\n  margin: 2px;\n}\n.formView .form .formHeader {\n  width: 100%;\n  font-size: 60px;\n  font-family: \"Sacramento\", cursive;\n  text-align: center;\n}\n.formView .form .formExplain {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n.formView .form .pleaseComplete {\n  color: red;\n  text-shadow: 0 0 5px black;\n  margin-top: 10px;\n}\n.formView .form .actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding-bottom: 75px;\n}\n.formView .form .actions .submitBtn {\n  height: 50px;\n  width: 100px;\n  background-color: #1f1d1d;\n  border-radius: 5px;\n  box-shadow: 0 0 5px white, 0 0 5px green;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formView .form .actions .formStatus {\n  height: 50px;\n  width: 150px;\n  background-color: lightgreen;\n  text-align: center;\n  border-radius: 5px;\n  text-shadow: 0 0 5px black;\n}\n.formView .form .actions .exitBtn {\n  font-size: 30px;\n  margin-top: 10px;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRFRBO0VBV1EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDUjtBREFRO0VBQUE7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7RUNHVjtBQUNGO0FEckJBO0VBcUJZLGVBQUE7RUFDQSxXQUFBO0FDR1o7QUR6QkE7RUEwQlksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDRVo7QUQvQkE7RUFnQ1ksbUJBQUE7RUFDQSxlQUFBO0FDRVo7QURuQ0E7RUFvQ1ksVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRHhDQTtFQXlDWSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDRVo7QUQ5Q0E7RUErQ2dCLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFaEI7QUR4REE7RUF5RGdCLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNFaEI7QURoRUE7RUFpRWdCLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREdBO0VBQ0ksYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtVmlldyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgLjg1KTtcbiAgICB6LWluZGV4OiA1MDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtSGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2FjcmFtZW50b1wiLCBjdXJzaXZlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtRXhwbGFpbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGVhc2VDb21wbGV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDc1cHg7XG5cbiAgICAgICAgICAgIC5zdWJtaXRCdG4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlLCAwIDAgNXB4IGdyZWVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtU3RhdHVzIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leGl0QnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwiLmZvcm1WaWV3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgei1pbmRleDogNTA7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvcm1WaWV3IC5mb3JtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmZvcm1WaWV3IC5mb3JtIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbn1cbi5mb3JtVmlldyAuZm9ybSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAycHg7XG59XG4uZm9ybVZpZXcgLmZvcm0gLmZvcm1IZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LWZhbWlseTogXCJTYWNyYW1lbnRvXCIsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtVmlldyAuZm9ybSAuZm9ybUV4cGxhaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybVZpZXcgLmZvcm0gLnBsZWFzZUNvbXBsZXRlIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZm9ybVZpZXcgLmZvcm0gLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xufVxuLmZvcm1WaWV3IC5mb3JtIC5hY3Rpb25zIC5zdWJtaXRCdG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHdoaXRlLCAwIDAgNXB4IGdyZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtVmlldyAuZm9ybSAuYWN0aW9ucyAuZm9ybVN0YXR1cyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG59XG4uZm9ybVZpZXcgLmZvcm0gLmFjdGlvbnMgLmV4aXRCdG4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

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

module.exports = "<div class=\"content\">\n  <div class=\"titleText\">\n      Feel Free to Reach Out!\n  </div>\n  <div class=\"infoSection\">\n      <div class=\"mapSection\">\n          <a href=\"https://goo.gl/maps/YYfR8mk82E93QJpCA\" target=\"_blank\">\n              <div class=\"mapDisplay\">\n                  <div>\n                      Care for a map?\n                  </div>\n              </div>\n          </a>\n      </div>\n      <div class=\"infoDetails\">\n          <div class=\"address\">\n              <div class=\"addressIcon\"></div>\n              <div class=\"streetAddress\">\n                  343 E Main Street<br>American Fork, UT 84003\n              </div>\n          </div>\n          <div class=\"email\">\n              <div class=\"emailIcon\"></div>\n              <div class=\"emailAddress\">\n                  milesaheadmusicutah@gmail.com\n              </div>\n          </div>\n          <div class=\"phone\">\n              <div class=\"phoneIcon\"></div>\n              <div class=\"phoneNumber\">\n                  801-753-8056\n              </div>\n          </div>\n      </div>\n      <div class=\"formBtnSec\">\n          <div class=\"formBtn\" (click)=\"displayForm()\">\n              Contact Form\n          </div>\n      </div>\n      <div class=\"dropInTitle\">\n          You can stop by during our operating hours:\n      </div>\n      <div class=\"hoursSec\">\n          <div class=\"studioPic\"></div>\n          <div class=\"hoursInfo\">\n              Monday - Friday<br>\n              2:30pm - 8:30pm\n          </div>\n      </div>\n  </div>\n  <app-footer-bar></app-footer-bar>\n</div>\n<app-contact-form></app-contact-form>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.less":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  position: absolute;\n}\n.content .titleText {\n  height: 100px;\n  width: calc(100% - 40px);\n  padding: 20px;\n  margin-top: 120px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-family: 'Sacramento', cursive;\n  font-size: 40px;\n}\n@media screen and (min-width: 500px) {\n  .content .titleText {\n    margin-bottom: 0;\n  }\n}\n.content .infoSection {\n  width: 100%;\n}\n.content .infoSection .mapSection {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .infoSection .mapSection .mapDisplay {\n  height: 200px;\n  width: 300px;\n  box-shadow: 0 0 10px black;\n  border-radius: 5px;\n  background-image: url('milesAheadMap.png');\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.2s;\n}\n@media screen and (min-width: 500px) {\n  .content .infoSection .mapSection .mapDisplay {\n    height: 250px;\n    width: 400px;\n  }\n}\n.content .infoSection .mapSection .mapDisplay:hover {\n  transform: scale(1.05);\n  transition: 0.2s;\n}\n.content .infoSection .mapSection .mapDisplay div {\n  color: white;\n  font-size: 20px;\n  text-decoration: none;\n  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 10px black;\n}\n.content .infoSection .mapSection a {\n  text-decoration: none;\n}\n.content .infoSection .infoDetails {\n  width: 100%;\n  font-size: 16px;\n  margin-top: 20px;\n}\n@media screen and (min-width: 500px) {\n  .content .infoSection .infoDetails {\n    margin-top: 50px;\n  }\n}\n.content .infoSection .infoDetails div {\n  margin: 10px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin-left: 20px;\n}\n@media screen and (min-width: 500px) {\n  .content .infoSection .infoDetails div {\n    justify-content: center;\n  }\n}\n.content .infoSection .infoDetails .address .addressIcon {\n  height: 50px;\n  width: 50px;\n  background-image: url('addressIcon.png');\n  background-size: cover;\n}\n.content .infoSection .infoDetails .address .streetAddress {\n  display: block;\n  width: 200px;\n}\n.content .infoSection .infoDetails .email .emailIcon {\n  height: 50px;\n  width: 50px;\n  background-image: url('emailIcon.png');\n  background-size: cover;\n}\n.content .infoSection .infoDetails .email .emailAddress {\n  display: block;\n  width: 200px;\n  font-size: 12px;\n}\n.content .infoSection .infoDetails .phone .phoneIcon {\n  height: 50px;\n  width: 50px;\n  background-image: url('phoneIcon.png');\n  background-size: cover;\n}\n.content .infoSection .infoDetails .phone .phoneNumber {\n  width: 200px;\n  display: block;\n}\n.content .infoSection .formBtnSec {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Sacramento', cursive;\n  font-size: 30px;\n}\n.content .infoSection .formBtnSec .formBtn {\n  height: 90px;\n  width: 250px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 45px;\n  color: white;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1f1d1d;\n  box-shadow: 0 0 5px black, 0 0 10px black;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.content .infoSection .formBtnSec .formBtn:hover {\n  transform: scale(1.05);\n  transition: 0.2s;\n}\n.content .infoSection .dropInTitle {\n  height: 50px;\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-size: 20px;\n  text-align: center;\n}\n.content .infoSection .hoursSec {\n  height: 300px;\n  width: 100%;\n  margin-bottom: 50px;\n}\n.content .infoSection .hoursSec .studioPic {\n  height: 150px;\n  width: 150px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background-image: url('studioPic2.jpg');\n  background-size: cover;\n}\n.content .infoSection .hoursSec .hoursInfo {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FESEE7RUFLUSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDQ1I7QURBUTtFQUFBO0lBQ0ksZ0JBQUE7RUNHVjtBQUNGO0FEbEJBO0VBa0JRLFdBQUE7QUNHUjtBRHJCQTtFQXFCWSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHWjtBRDNCQTtFQTJCZ0IsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR2hCO0FERmdCO0VBQUE7SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQ0tsQjtBQUNGO0FESGdCO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ0twQjtBRGxEQTtFQWlEb0IsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlEQUFBO0FDSXBCO0FEeERBO0VBeURnQixxQkFBQTtBQ0VoQjtBRDNEQTtFQTZEWSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ1o7QURBWTtFQUFBO0lBQ0ksZ0JBQUE7RUNHZDtBQUNGO0FEckVBO0VBcUVnQixZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0doQjtBREZnQjtFQUFBO0lBQ0ksdUJBQUE7RUNLbEI7QUFDRjtBRGpGQTtFQWdGb0IsWUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FDSXBCO0FEdkZBO0VBc0ZvQixjQUFBO0VBQ0EsWUFBQTtBQ0lwQjtBRDNGQTtFQTRGb0IsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FDRXBCO0FEakdBO0VBa0dvQixjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFcEI7QUR0R0E7RUF5R29CLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBQ0FwQjtBRDVHQTtFQStHb0IsWUFBQTtFQUNBLGNBQUE7QUNBcEI7QURoSEE7RUFxSFksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FEekhBO0VBOEhnQixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZoQjtBRElnQjtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNGcEI7QUQ3SUE7RUFvSlksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0paO0FEdEpBO0VBNkpZLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNKWjtBRDNKQTtFQWtLZ0IsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FDSmhCO0FEbktBO0VBMEtnQixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLnRpdGxlVGV4dCB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiB+XCJjYWxjKDEwMCUgLSA0MHB4KVwiO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ1NhY3JhbWVudG8nLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmluZm9TZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLm1hcFNlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAubWFwRGlzcGxheSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pbGVzQWhlYWRNYXAucG5nXCIpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5mb0RldGFpbHMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICAgICAgLmFkZHJlc3NJY29uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2FkZHJlc3NJY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdHJlZXRBZGRyZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZW1haWwge1xuICAgICAgICAgICAgICAgIC5lbWFpbEljb24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvZW1haWxJY29uLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lbWFpbEFkZHJlc3Mge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBob25lIHtcbiAgICAgICAgICAgICAgICAucGhvbmVJY29uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3Bob25lSWNvbi5wbmcpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGhvbmVOdW1iZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9ybUJ0blNlYyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcblxuICAgICAgICAgICAgLmZvcm1CdG4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDI5LCAyOSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2s7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kcm9wSW5UaXRsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaG91cnNTZWMge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgICAgICAgICAgLnN0dWRpb1BpYyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMi5qcGcnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvdXJzSW5mbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRlbnQgLnRpdGxlVGV4dCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQgLnRpdGxlVGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLm1hcFNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLm1hcFNlY3Rpb24gLm1hcERpc3BsYXkge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pbGVzQWhlYWRNYXAucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5tYXBTZWN0aW9uIC5tYXBEaXNwbGF5IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5tYXBTZWN0aW9uIC5tYXBEaXNwbGF5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAubWFwU2VjdGlvbiAubWFwRGlzcGxheSBkaXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2s7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLm1hcFNlY3Rpb24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyBkaXYge1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAuaW5mb1NlY3Rpb24gLmluZm9EZXRhaWxzIGRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMgLmFkZHJlc3MgLmFkZHJlc3NJY29uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2FkZHJlc3NJY29uLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmluZm9EZXRhaWxzIC5hZGRyZXNzIC5zdHJlZXRBZGRyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMgLmVtYWlsIC5lbWFpbEljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvZW1haWxJY29uLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmluZm9EZXRhaWxzIC5lbWFpbCAuZW1haWxBZGRyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRlbnQgLmluZm9TZWN0aW9uIC5pbmZvRGV0YWlscyAucGhvbmUgLnBob25lSWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9waG9uZUljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaW5mb0RldGFpbHMgLnBob25lIC5waG9uZU51bWJlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmZvcm1CdG5TZWMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuZm9ybUJ0blNlYyAuZm9ybUJ0biB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuZm9ybUJ0blNlYyAuZm9ybUJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmRyb3BJblRpdGxlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmhvdXJzU2VjIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY29udGVudCAuaW5mb1NlY3Rpb24gLmhvdXJzU2VjIC5zdHVkaW9QaWMge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMi5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50IC5pbmZvU2VjdGlvbiAuaG91cnNTZWMgLmhvdXJzSW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbiJdfQ== */"

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

/***/ "./src/app/footer-bar/footer-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div>\n        &copy; Miles Ahead Music - 2019<br>\n        Developed and maintained by BaldwinDev Web\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.less":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 60px;\n  width: 100%;\n  font-size: 12px;\n  color: white;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1f1d1d;\n  z-index: 2;\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9mb290ZXItYmFyL2Zvb3Rlci1iYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Zvb3Rlci1iYXIvZm9vdGVyLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1iYXIvZm9vdGVyLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufSIsIi5mb290ZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"

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

/***/ "./src/app/get-teacher-list.service.ts":
/*!*********************************************!*\
  !*** ./src/app/get-teacher-list.service.ts ***!
  \*********************************************/
/*! exports provided: GetTeacherListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTeacherListService", function() { return GetTeacherListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-link.service */ "./src/app/server-link.service.ts");



var GetTeacherListService = /** @class */ (function () {
    function GetTeacherListService(serverLink) {
        this.serverLink = serverLink;
        this.photoDisplay = "";
        this.nameDisplay = "";
        this.skillsDisplay = "";
        this.bioDisplay = "";
        this.teachers = [];
        this.getTeachersDB();
    }
    GetTeacherListService.prototype.getTeachersDB = function () {
        var _this = this;
        this.serverLink.ioSocket.emit('getTeachers');
        this.serverLink.ioSocket.on('teacherListSend', function (data) {
            console.log('teachers cleared');
            var teacherData = JSON.parse(data);
            for (var i = 0; i < teacherData.rows.length; i++) {
                _this.teachers.push({
                    "name": teacherData.rows[i].name,
                    "basicDes": teacherData.rows[i].basicdes,
                    "bio": teacherData.rows[i].bio,
                    "id": teacherData.rows[i].id,
                    "photo": teacherData.rows[i].photo
                });
            }
        });
    };
    GetTeacherListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_link_service__WEBPACK_IMPORTED_MODULE_2__["ServerLinkService"]])
    ], GetTeacherListService);
    return GetTeacherListService;
}());



/***/ }),

/***/ "./src/app/header-bar/header-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"header\">\n    <div class=\"logo inflate\" id=\"logo\" routerLink=\"/home\"></div>\n    <div class=\"navSection\">\n        <div class=\"navBtn\" routerLink=\"/contact-us\">\n                Contact Us\n        </div>\n        <div class=\"navBtn\" id=\"aboutUs\" routerLink=\"/about-us\">\n                About Us\n        </div>\n        <div class=\"navBtn\" id=\"lessonInfo\" routerLink=\"/lesson-info\">\n                Lesson Info\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.less":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 100px;\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  font-family: 'Julius Sans One', sans-serif;\n  z-index: 40;\n}\n.header .logo {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  background-image: url('milesAheadLogo.png');\n  background-size: cover;\n  outline: none;\n  z-index: 41;\n  top: 0;\n  left: 0;\n  transition: 0.3s;\n}\n@media screen and (min-width: 500px) {\n  .header .logo {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n.header .inflate {\n  transform: scale(1.15);\n  top: 10px;\n  left: 10px;\n  transition: 0.3s;\n}\n@media screen and (min-width: 500px) {\n  .header .inflate {\n    top: 30px;\n    transform: scale(1.5);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header .inflate {\n    top: 100px;\n    margin-left: 100px;\n    transform: scale(2.5);\n  }\n}\n.header .navSection {\n  width: calc(100% - 140px);\n  margin-left: 100px;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n}\n@media screen and (max-width: 330px) {\n  .header .navSection {\n    font-size: 12px;\n  }\n}\n@media screen and (min-width: 500px) {\n  .header .navSection {\n    padding-left: 50px;\n    padding-right: 50px;\n    margin-left: 120px;\n    width: calc(100% - 240px);\n    font-size: 30px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header .navSection {\n    width: calc(100% - 440px);\n    margin-left: 300px;\n  }\n}\n.header .navSection .navBtn {\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n}\n@media screen and (min-width: 500px) {\n  .header .navSection .navBtn {\n    width: 120px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header .navSection .navBtn {\n    width: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9oZWFkZXItYmFyL2hlYWRlci1iYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2hlYWRlci1iYXIvaGVhZGVyLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEUkE7RUFVUSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFRQSxnQkFBQTtBQ05SO0FERFE7RUFBQTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUNJVjtBQUNGO0FEMUJBO0VBOEJRLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FERVE7RUFBQTtJQUNJLFNBQUE7SUFDQSxxQkFBQTtFQ0NWO0FBQ0Y7QURBUTtFQUFBO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUNHVjtBQUNGO0FEN0NBO0VBNkNRLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDR1I7QURGUTtFQUFBO0lBQ0ksZUFBQTtFQ0tWO0FBQ0Y7QURKUTtFQUFBO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0VDT1Y7QUFDRjtBRE5RO0VBQUE7SUFDSSx5QkFBQTtJQUNBLGtCQUFBO0VDU1Y7QUFDRjtBRDNFQTtFQXFFWSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDU1o7QURSWTtFQUFBO0lBQ0ksWUFBQTtFQ1dkO0FBQ0Y7QURWWTtFQUFBO0lBQ0ksWUFBQTtFQ2FkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItYmFyL2hlYWRlci1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICB6LWluZGV4OiA0MDtcblxuICAgIC5sb2dvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWlsZXNBaGVhZExvZ28ucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDQxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICAuaW5mbGF0ZSB7XG4gICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uYXZTZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IH5cImNhbGMoMTAwJSAtIDE0MHB4KVwiO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMzMHB4KXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IH5cImNhbGMoMTAwJSAtIDI0MHB4KVwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgICB3aWR0aDogflwiY2FsYygxMDAlIC0gNDQwcHgpXCI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2QnRuIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICB6LWluZGV4OiA0MDtcbn1cbi5oZWFkZXIgLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9taWxlc0FoZWFkTG9nby5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogNDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuLmhlYWRlciAuaW5mbGF0ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgLmluZmxhdGUge1xuICAgIHRvcDogMzBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyIC5pbmZsYXRlIHtcbiAgICB0b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG4gIH1cbn1cbi5oZWFkZXIgLm5hdlNlY3Rpb24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xuICAuaGVhZGVyIC5uYXZTZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgLm5hdlNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXIgLm5hdlNlY3Rpb24ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NDBweCk7XG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICB9XG59XG4uaGVhZGVyIC5uYXZTZWN0aW9uIC5uYXZCdG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgLm5hdlNlY3Rpb24gLm5hdkJ0biB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlciAubmF2U2VjdGlvbiAubmF2QnRuIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "\n<!-- Layer 1 -->\n<div class=\"super\">\n  <video autoplay loop autobuffer muted playsinline id=\"studioVid\" [muted]=\"true\">\n      <source src=\"../../assets/site-media/MilesAheadBackgroundVid.mp4\">\n  </video>\n</div>\n\n\n<!-- Layer 2 -->\n<div class=\"content\">\n  <div class=\"vidOverlay\">\n      <div class=\"sellPoint\">\n          <div class=\"mainText\">\n              Music Lessons on Any Instrument\n          </div>\n          <div class=\"subText\">\n              Best Teachers. Best Price. Any Instrument.\n          </div>\n      </div>\n      <div class=\"enrollBtn\" (click)=\"displayForm()\">\n          Get A Quote\n      </div>\n  </div>\n\n  <div class=\"missionStatement\">\n      <div class=\"text\">\n              We offer the highest quality lessons at an affordable price so that you can become \n              the musician YOU want to become. Miles Ahead Music is made of hand selected teachers \n              who have proven to be the very best at what they do.\n      </div>\n  </div>\n  <div class=\"instructorsHeading\">\n      Meet our Teachers!\n  </div>\n  <app-teacher-display></app-teacher-display>\n  <div class=\"reviews\">\n      <div class=\"stars\"></div>\n      <div class=\"starsSubHead\">\n          We Maintain a Five Star Rating!\n      </div>\n      <div class=\"realReviews\">\n          <app-single-review *ngFor=\"let review of reviews\" [reviewer]=\"review.reviewerName\"\n          [relationship]=\"review.relationship\" [review]=\"review.review\" [reviewId]=\"review.reviewId\"></app-single-review>\n      </div>\n  </div>\n  <div class=\"recommendSec\">\n      <a href=\"https://www.summerhaysmusic.com\" target=\"_blank\">\n          <div class=\"storeLogo\"></div>\n      </a>\n      <div class=\"storeText\">\n          Wondering where to buy or rent an instrument? Check out Summerhays, our favorite music store!\n          <br>\n          <br>\n          www.summerhaysmusic.com\n      </div>\n  </div>\n  <app-footer-bar></app-footer-bar>\n</div>\n\n\n\n<!-- <div class=\"infoPop hidden\" id=\"pop1\">\n  <div class=\"information\">\n      Fall 2019 Enrollment Sale!<br><br>\n      Register Now and Save 15% on Lessons!\n      <div class=\"popBtn\">\n           Click here to get started!\n      </div>\n  </div>\n  <div class=\"exitBtn\" onclick=\"hidePop()\">\n      X\n  </div>\n</div> -->\n<app-contact-form></app-contact-form>\n<app-bio-display class=\"bioDisplay\" ></app-bio-display>\n"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".super {\n  height: 400px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  z-index: 1;\n}\n@media screen and (min-width: 500px) {\n  .super {\n    height: 500px;\n  }\n}\n@media scren and (min-width: 1200px) {\n  .super {\n    height: 600px;\n  }\n}\n.super #studioVid {\n  min-height: 100%;\n  min-width: 100%;\n  width: auto;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.content {\n  width: 100%;\n  position: absolute;\n  z-index: 2;\n  font-family: 'Quicksand', sans-serif;\n}\n.content .vidOverlay {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay {\n    height: 400px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .content .vidOverlay {\n    height: 500px;\n  }\n}\n.content .vidOverlay .sellPoint {\n  color: white;\n  font-family: 'Sacramento', cursive;\n  text-align: center;\n  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 10px black, 0 0 10px black, 0 0 15px black;\n  margin-bottom: 50px;\n}\n.content .vidOverlay .sellPoint .mainText {\n  font-size: 40px;\n  margin-top: 160px;\n  margin-bottom: 10px;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay .sellPoint .mainText {\n    font-size: 50px;\n  }\n}\n.content .vidOverlay .sellPoint .subText {\n  width: 200px;\n  margin: 0 auto;\n  font-size: 15px;\n  font-family: 'Julius Sans One', sans-serif;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay .sellPoint .subText {\n    font-size: 20px;\n    width: 300px;\n  }\n}\n.content .vidOverlay .enrollBtn {\n  height: 100px;\n  width: 90%;\n  font-family: 'Sacramento', cursive;\n  border-radius: 50px;\n  background-color: #1f1d1d;\n  color: white;\n  font-size: 30px;\n  text-shadow: 0 0 2px black;\n  box-shadow: 0 0 15px black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 350px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n@media screen and (min-width: 500px) {\n  .content .vidOverlay .enrollBtn {\n    width: 300px;\n    top: 450px;\n  }\n}\n.content .missionStatement {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  margin-top: 180px;\n}\n@media screen and (min-width: 500px) {\n  .content .missionStatement {\n    margin-top: 200px;\n  }\n}\n.content .missionStatement .text {\n  width: 60%;\n  font-size: 15px;\n  color: #383636;\n  font-family: 'Quicksand', sans-serif;\n  text-align: center;\n}\n@media screen and (min-width: 500px) {\n  .content .missionStatement .text {\n    font-size: 18px;\n  }\n}\n.content .instructorsHeading {\n  font-size: 40px;\n  font-family: \"Sacramento\", cursive;\n  text-align: center;\n  background-color: white;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n@media screen and (min-width: 500px) {\n  .content .instructorsHeading {\n    font-size: 50px;\n  }\n}\n.content .reviews {\n  width: 100%;\n  margin-top: 50px;\n}\n.content .reviews .stars {\n  height: 50px;\n  width: 260px;\n  margin: 0 auto;\n  background-image: url('fiveStars.png');\n  background-size: cover;\n}\n.content .reviews .starsSubHead {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 30px;\n  font-family: 'Sacramento', cursive;\n}\n.content .reviews .realReviews {\n  margin-top: 50px;\n}\n@media screen and (min-width: 1200px) {\n  .content .reviews .realReviews {\n    display: flex;\n    justify-content: center;\n  }\n}\n.content .recommendSec {\n  width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background-color: #3d3a3a;\n  margin-bottom: 100px;\n  margin-top: 50px;\n}\n.content .recommendSec .storeLogo {\n  height: 180px;\n  width: 180px;\n  border-radius: 90px;\n  background-image: url('SummerhaysLogo.jpeg');\n  background-size: cover;\n  cursor: pointer;\n  transition: 0.2s;\n  margin: 0 auto;\n}\n.content .recommendSec .storeLogo:hover {\n  transform: scale(1.05);\n  transition: 0.2s;\n}\n.content .recommendSec .storeText {\n  width: 90%;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKO0FEQ0k7RUFBQTtJQUNJLGFBQUE7RUNFTjtBQUNGO0FEREk7RUFBQTtJQUNJLGFBQUE7RUNJTjtBQUNGO0FEbEJBO0VBaUJRLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDSVI7QUREQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQ0dKO0FEUEE7RUFPUSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBREZRO0VBQUE7SUFDSSxhQUFBO0VDS1Y7QUFDRjtBREpRO0VBQUE7SUFDSSxhQUFBO0VDT1Y7QUFDRjtBRHZCQTtFQW9CWSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlGQUFBO0VBQ0EsbUJBQUE7QUNNWjtBRDlCQTtFQTJCZ0IsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNNaEI7QURMZ0I7RUFBQTtJQUNJLGVBQUE7RUNRbEI7QUFDRjtBRHhDQTtFQW1DZ0IsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUNRaEI7QURQZ0I7RUFBQTtJQUNJLGVBQUE7SUFDQSxZQUFBO0VDVWxCO0FBQ0Y7QURwREE7RUErQ1ksYUFBQTtFQUNBLFVBQUE7RUFFQSxrQ0FBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ01aO0FETFk7RUFBQTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VDUWQ7QUFDRjtBRDVFQTtFQXlFUSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDTVI7QURMUTtFQUFBO0lBQ0ksaUJBQUE7RUNRVjtBQUNGO0FEekZBO0VBb0ZZLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNRWjtBRFBZO0VBQUE7SUFDSSxlQUFBO0VDVWQ7QUFDRjtBRHJHQTtFQWdHUSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1FSO0FEUFE7RUFBQTtJQUNJLGVBQUE7RUNVVjtBQUNGO0FEbEhBO0VBNEdRLFdBQUE7RUFDQSxnQkFBQTtBQ1NSO0FEdEhBO0VBZ0hZLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUNTWjtBRDdIQTtFQXVIWSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDU1o7QURuSUE7RUE2SFksZ0JBQUE7QUNTWjtBRFJZO0VBQUE7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUNXZDtBQUNGO0FENUlBO0VBc0lRLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDU1I7QURwSkE7RUE4SVksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU1o7QUQ5SkE7RUF3Slksc0JBQUE7RUFDQSxnQkFBQTtBQ1NaO0FEbEtBO0VBNEpZLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDU1o7QURMQTtFQUNJLGFBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdXBlciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgei1pbmRleDogMTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG5cbiAgICAjc3R1ZGlvVmlkIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG5cbiAgICAudmlkT3ZlcmxheSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG5cblxuICAgICAgICAuc2VsbFBvaW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaywgMCAwIDVweCBibGFjaywgMCAwIDEwcHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrLCAwIDAgMTVweCBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgICAgIC5tYWluVGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YlRleHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmVucm9sbEJ0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMjksIDI5KTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggYmxhY2s7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAzNTBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiA0NTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taXNzaW9uU3RhdGVtZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTgwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNTYsIDU0LCA1NCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluc3RydWN0b3JzSGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2FjcmFtZW50b1wiLCBjdXJzaXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmV2aWV3cyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAgIC5zdGFycyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2ZpdmVTdGFycy5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGFyc1N1YkhlYWQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWxSZXZpZXdzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVjb21tZW5kU2VjIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA1OCwgNTgpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICAuc3RvcmVMb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvU3VtbWVyaGF5c0xvZ28uanBlZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc3RvcmVMb2dvOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3JlVGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwiLnN1cGVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5zdXBlciB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1cGVyIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG59XG4uc3VwZXIgI3N0dWRpb1ZpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRlbnQgLnZpZE92ZXJsYXkge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5jb250ZW50IC52aWRPdmVybGF5IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRlbnQgLnZpZE92ZXJsYXkge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbn1cbi5jb250ZW50IC52aWRPdmVybGF5IC5zZWxsUG9pbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDAgMCA1cHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrLCAwIDAgMTBweCBibGFjaywgMCAwIDE1cHggYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY29udGVudCAudmlkT3ZlcmxheSAuc2VsbFBvaW50IC5tYWluVGV4dCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXRvcDogMTYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAudmlkT3ZlcmxheSAuc2VsbFBvaW50IC5tYWluVGV4dCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG4uY29udGVudCAudmlkT3ZlcmxheSAuc2VsbFBvaW50IC5zdWJUZXh0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAudmlkT3ZlcmxheSAuc2VsbFBvaW50IC5zdWJUZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG4uY29udGVudCAudmlkT3ZlcmxheSAuZW5yb2xsQnRuIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQgLnZpZE92ZXJsYXkgLmVucm9sbEJ0biB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRvcDogNDUwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5taXNzaW9uU3RhdGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTgwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAubWlzc2lvblN0YXRlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5taXNzaW9uU3RhdGVtZW50IC50ZXh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzM4MzYzNjtcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAubWlzc2lvblN0YXRlbWVudCAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4uY29udGVudCAuaW5zdHJ1Y3RvcnNIZWFkaW5nIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJTYWNyYW1lbnRvXCIsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAuY29udGVudCAuaW5zdHJ1Y3RvcnNIZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5yZXZpZXdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY29udGVudCAucmV2aWV3cyAuc3RhcnMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2ZpdmVTdGFycy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCAucmV2aWV3cyAuc3RhcnNTdWJIZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG59XG4uY29udGVudCAucmV2aWV3cyAucmVhbFJldmlld3Mge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250ZW50IC5yZXZpZXdzIC5yZWFsUmV2aWV3cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRlbnQgLnJlY29tbWVuZFNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNhM2E7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNvbnRlbnQgLnJlY29tbWVuZFNlYyAuc3RvcmVMb2dvIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9TdW1tZXJoYXlzTG9nby5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRlbnQgLnJlY29tbWVuZFNlYyAuc3RvcmVMb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250ZW50IC5yZWNvbW1lbmRTZWMgLnN0b3JlVGV4dCB7XG4gIHdpZHRoOiA5MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

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

module.exports = "\n\n<div class=\"content\">\n  <div class=\"sellPoint\">\n      <div>\n          Lessons on Any Instrument\n      </div>\n  </div>\n  <div class=\"quote\">\n      <div class=\"quoteBtn\" (click)=\"displayForm()\">\n          Get A Quote\n      </div>\n  </div>\n  <div class=\"examples\">\n      <div class=\"exampleHead\">\n          <div>\n              Here are a few we regularly teach:\n          </div>\n      </div>\n      <div class=\"instList\">\n          <div>\n              Voice | Piano | Drums | Music Production | \n              Song Writing | Violin | Viola | Cello | Bass | \n              Ukulele | Guitar | Banjo | Mandolin | Saxophone | \n              Clarinet | Flute | Oboe | Bassoon | \n              English Horn | Trumpet | Trombone | French Horn | \n              Euphonium | Baritone | Tuba\n          </div>\n      </div>\n  </div>\n\n  <div class=\"photoDisplay\">\n      <div class=\"photo\">\n          \n      </div>\n  </div>\n\n  <div class=\"teachers\">\n      <div class=\"pro\">\n          <div class=\"title\">\n              Pro Teachers\n          </div>\n          <div class=\"text\">\n              Our pro teachers have or are about \n              to receive degrees on the instrument they teach and \n              perform locally and globally as professional \n              musicians! Our pro teachers have played in Dubai, \n              the Philippines, China, Australia, Thailand, and all \n              over Europe, North and South America! They have shared \n              stages with KELLY CLARKSON, JOURNEY, LEANN RIMES, NEON \n              TREES and countless jazz and classical legends.\n          </div>\n      </div>\n      <div class=\"apprentice\">\n          <div class=\"title\">\n              Apprentice Teachers\n          </div>\n          <div class=\"text\">\n              Our apprentice teachers are \n              non-music major teachers that have shown exceptional \n              ability on their instrument. To learn with an apprentice \n              teacher the student must have under 1 year of experience. \n              Learning with an apprentice teacher is a great way to get \n              started on lessons at a more affordable price!\n          </div>\n      </div>\n      <div class=\"teachersFair\">\n          Doing It Right:\n          We pay our teachers fair wages while maintaining fair\n          tuition.\n      </div>\n  </div>\n  \n  <div class=\"lessons\">\n      <div class=\"lessonsHead\">\n          Private Lesson Details\n      </div>\n      <div class=\"lessonsText\">\n          Lessons are taken either by term (Fall, Winter, Spring \n          and Summer), or on a weekly basis!\n          <br><br>\n          We stand out from other arts programs by offering the \n          best pricing as well as 10% OFF for multi-student families!\n          <br><br>\n      </div>\n\n      <div class=\"lessonsType\">\n          <div class=\"length30\">\n              <div class=\"title\">\n                  30-Minute Lessons\n              </div>\n              <div class=\"text\">\n                  30-minute one-on-one lessons with an extraordinary teacher!\n              </div> \n          </div>\n          <div class=\"length60\">\n              <div class=\"title\">\n                  60-Minute Lessons\n              </div>\n              <div class=\"text\">\n                  Hour-long one-on-one lessons with an extraordinary teacher! \n                  These lessons are great for students that are seriously \n                  pursuing music, or feel that they need some extra time with \n                  the teacher. Our teachers love hour long lessons, since they feel \n                  they can help the most in this setting!\n              </div>\n          </div>\n          <div class=\"semiPrivate\">\n              <div class=\"title\">\n                  Semi-Private Lessons\n              </div>\n              <div class=\"text\">\n                  Group lessons where students can learn together on the same \n                  instrument. Several options exist within this category, from \n                  two students to five students learning at once.\n              </div>\n          </div>\n          <div class=\"musicAppreciate\">\n              <div class=\"title\">\n                  Music Appreciation Class\n              </div>\n              <div class=\"text\">\n                  Bring your children (ages 1-3) or (ages 4-6) in to learn \n                  music fundamentals in a group setting! Children create \n                  music using Boomwhackers, bells, auxiliary percussion \n                  instruments and their own voices. We encourage the kids \n                  to learn rhythms and music through dance and actual \n                  instrumental experience. More advanced classes can learn \n                  on recorder, piano or ukulele!\n              </div>\n          </div>\n      </div>\n\n  </div>\n\n  <app-footer-bar></app-footer-bar>\n\n</div>\n<app-contact-form></app-contact-form>\n"

/***/ }),

/***/ "./src/app/lesson-info/lesson-info.component.less":
/*!********************************************************!*\
  !*** ./src/app/lesson-info/lesson-info.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  position: absolute;\n  top: 100px;\n  z-index: 2;\n  font-size: 20px;\n  font-family: \"Quicksand\", sans-serif;\n}\n.content .sellPoint {\n  height: 100px;\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Sacramento', cursive;\n  font-size: 50px;\n  text-align: center;\n}\n.content .quote {\n  margin-top: 50px;\n}\n.content .quote .quoteBtn {\n  height: 100px;\n  width: 300px;\n  border-radius: 50px;\n  background-color: #1f1d1d;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-family: 'Sacramento', cursive;\n  font-size: 30px;\n  box-shadow: 0 0 10px black;\n}\n.content .examples {\n  width: 100%;\n  margin-top: 50px;\n}\n.content .examples .exampleHead {\n  height: 100px;\n  width: 100%;\n  font-size: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.content .examples .instList {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n.content .examples .instList .div {\n  width: 700px;\n  text-align: center;\n}\n.content .photoDisplay {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .photoDisplay .photo {\n  height: 250px;\n  width: 250px;\n  background-image: url('lessonImage.jpg');\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n}\n.content .teachers {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 50px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.content .teachers .title {\n  font-family: 'Julius Sans One', sans-serif;\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.content .teachers .text {\n  margin-bottom: 50px;\n}\n.content .teachers .teachersFair {\n  width: 100%;\n  text-align: center;\n}\n.content .lessons {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 100px;\n  text-align: center;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.content .lessons .lessonsHead {\n  width: 100%;\n  font-size: 40px;\n  margin-bottom: 50px;\n  text-align: center;\n  font-family: 'Julius Sans One', sans-serif;\n}\n.content .lessons .lessonsType .title {\n  font-family: 'Sacramento', cursive;\n  font-size: 30px;\n}\n.content .lessons .lessonsType .text {\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9sZXNzb24taW5mby9sZXNzb24taW5mby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGVzc29uLWluZm8vbGVzc29uLWluZm8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FKO0FETkE7RUFTUSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEakJBO0VBb0JRLGdCQUFBO0FDQVI7QURwQkE7RUF1QlksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDQVo7QURsQ0E7RUFzQ1EsV0FBQTtFQUNBLGdCQUFBO0FDRFI7QUR0Q0E7RUEwQ1ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRFo7QURoREE7RUFvRFksVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RaO0FEMURBO0VBOERnQixZQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QUQ5REE7RUFvRVEsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSFI7QURwRUE7RUEwRVksYUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0haO0FENUVBO0VBbUZRLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSlI7QURuRkE7RUEwRlksMENBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0paO0FEekZBO0VBZ0dZLG1CQUFBO0FDSlo7QUQ1RkE7RUFvR1ksV0FBQTtFQUNBLGtCQUFBO0FDTFo7QURoR0E7RUF5R1EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05SO0FEeEdBO0VBaUhZLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDTlo7QUQvR0E7RUE2SGdCLGtDQUFBO0VBQ0EsZUFBQTtBQ1hoQjtBRG5IQTtFQWlJZ0IsbUJBQUE7QUNYaEIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb24taW5mby9sZXNzb24taW5mby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuXG4gICAgLnNlbGxQb2ludCB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5xdW90ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgLnF1b3RlQnRue1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDI5LCAyOSk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NhY3JhbWVudG8nLCBjdXJzaXZlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmV4YW1wbGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgLmV4YW1wbGVIZWFkIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0TGlzdCB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuXG4gICAgICAgICAgICAuZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5waG90b0Rpc3BsYXkge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAucGhvdG8ge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2xlc3NvbkltYWdlLmpwZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGVhY2hlcnMge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRlYWNoZXJzRmFpciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGVzc29ucyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcblxuICAgICAgICAubGVzc29uc0hlYWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC8vIC5sZXNzb25zVGV4dCB7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAubGVzc29uc1R5cGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICB6LWluZGV4OiAyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRlbnQgLnNlbGxQb2ludCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudCAucXVvdGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNvbnRlbnQgLnF1b3RlIC5xdW90ZUJ0biB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQxZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG59XG4uY29udGVudCAuZXhhbXBsZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb250ZW50IC5leGFtcGxlcyAuZXhhbXBsZUhlYWQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQgLmV4YW1wbGVzIC5pbnN0TGlzdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cbi5jb250ZW50IC5leGFtcGxlcyAuaW5zdExpc3QgLmRpdiB7XG4gIHdpZHRoOiA3MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgLnBob3RvRGlzcGxheSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQgLnBob3RvRGlzcGxheSAucGhvdG8ge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2xlc3NvbkltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbn1cbi5jb250ZW50IC50ZWFjaGVycyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5jb250ZW50IC50ZWFjaGVycyAudGl0bGUge1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQgLnRlYWNoZXJzIC50ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5jb250ZW50IC50ZWFjaGVycyAudGVhY2hlcnNGYWlyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IC5sZXNzb25zIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLmNvbnRlbnQgLmxlc3NvbnMgLmxlc3NvbnNIZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG59XG4uY29udGVudCAubGVzc29ucyAubGVzc29uc1R5cGUgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmNvbnRlbnQgLmxlc3NvbnMgLmxlc3NvbnNUeXBlIC50ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbiJdfQ== */"

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

module.exports = ".singleReview {\n  height: 500px;\n  width: 90%;\n  color: white;\n  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 10px black, 0 0 15px black, 0 0 20px black;\n  border-radius: 7px;\n  margin-left: 5%;\n  margin-bottom: 20px;\n  transition: 0.4s;\n  background-size: cover;\n}\n@media screen and (min-width: 500px) {\n  .singleReview {\n    width: 50%;\n    margin-left: 25%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .singleReview {\n    width: 350px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n.singleReview .review {\n  font-size: 20px;\n  height: 70%;\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n.singleReview .reviewerName {\n  font-size: 25px;\n  text-align: center;\n  margin-top: 20px;\n}\n.singleReview .relationship {\n  font-size: 18px;\n  text-align: center;\n}\n.studioPic1 {\n  background-image: url('studioPic1.jpg');\n}\n.studioPic2 {\n  background-image: url('studioPic2.jpg');\n}\n.studioPic3 {\n  background-image: url('studioPic3.jpg');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC9zaW5nbGUtcmV2aWV3L3NpbmdsZS1yZXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NpbmdsZS1yZXZpZXcvc2luZ2xlLXJldmlldy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlGQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQUo7QURDSTtFQUFBO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VDRU47QUFDRjtBRERJO0VBQUE7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0lOO0FBQ0Y7QUR0QkE7RUFxQlEsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNJUjtBRGhDQTtFQStCUSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0lSO0FEckNBO0VBb0NRLGVBQUE7RUFDQSxrQkFBQTtBQ0lSO0FEREE7RUFDSSx1Q0FBQTtBQ0dKO0FEREE7RUFDSSx1Q0FBQTtBQ0dKO0FEREE7RUFDSSx1Q0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXJldmlldy9zaW5nbGUtcmV2aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2luZ2xlUmV2aWV3IHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAwIDAgNXB4IGJsYWNrLCAwIDAgMTBweCBibGFjaywgMCAwIDE1cHggYmxhY2ssIDAgMCAyMHB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAucmV2aWV3IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnJldmlld2VyTmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAucmVsYXRpb25zaGlwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuLnN0dWRpb1BpYzEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMS5qcGcnKTtcbn1cbi5zdHVkaW9QaWMyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3N0dWRpb1BpYzIuanBnJyk7XG59XG4uc3R1ZGlvUGljMyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9zdHVkaW9QaWMzLmpwZycpO1xufSIsIi5zaW5nbGVSZXZpZXcge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAwIDAgNXB4IGJsYWNrLCAwIDAgMTBweCBibGFjaywgMCAwIDE1cHggYmxhY2ssIDAgMCAyMHB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5zaW5nbGVSZXZpZXcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zaW5nbGVSZXZpZXcge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5zaW5nbGVSZXZpZXcgLnJldmlldyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiA3MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2luZ2xlUmV2aWV3IC5yZXZpZXdlck5hbWUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zaW5nbGVSZXZpZXcgLnJlbGF0aW9uc2hpcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0dWRpb1BpYzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL3N0dWRpb1BpYzEuanBnJyk7XG59XG4uc3R1ZGlvUGljMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvc3R1ZGlvUGljMi5qcGcnKTtcbn1cbi5zdHVkaW9QaWMzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9zdHVkaW9QaWMzLmpwZycpO1xufVxuIl19 */"

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

/***/ "./src/app/teacher-display/teacher-display.component.html":
/*!****************************************************************!*\
  !*** ./src/app/teacher-display/teacher-display.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardViewport\" id=\"cardViewport\" (window:resize)=\"createTeacherDisplay()\">\n  <div class=\"item\" id=\"{{teacher.id}}\" onmouseover=\"\" *ngFor=\"let teacher of teachers\">\n    <div>\n      <div class=\"instructorPhoto {{teacher.id}}\">\n\n      </div>\n      <div class=\"instructorName\">\n          {{teacher.name}}\n      </div>\n      <div class=\"instructorDesc\">\n          {{teacher.basicDes}}\n      </div>\n      <div class=\"seeBioBtn\" (click)=\"displayTeacherBio(teacher.id)\">\n          \n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/teacher-display/teacher-display.component.less":
/*!****************************************************************!*\
  !*** ./src/app/teacher-display/teacher-display.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardViewport {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n@media screen and (min-width: 1200px) {\n  .cardViewport .item:hover {\n    transform: scale(1.15);\n    transition: 0.2s;\n  }\n}\n.cardViewport .item {\n  height: 350px;\n  width: 300px;\n  position: static;\n  display: flex;\n  margin: 20px;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  text-align: center;\n  text-shadow: 0 0 3px black;\n  border-radius: 5px;\n  transition: 0.2s;\n  background-image: linear-gradient(#383535, #1f1d1d);\n}\n@media screen and (min-width: 1200px) {\n  .cardViewport .item {\n    height: 500px;\n    width: 300px;\n  }\n}\n.cardViewport .item .instructorPhoto {\n  height: 150px;\n  width: 150px;\n  background-size: cover;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.cardViewport .item .instructor1 {\n  background-image: url('madisonMoline.png');\n}\n.cardViewport .item .instructor2 {\n  background-image: url('jasonFullmer.png');\n}\n.cardViewport .item .instructor3 {\n  background-image: url('austieRobinson.png');\n}\n.cardViewport .item .instructor4 {\n  background-image: url('nelsenCampbell.png');\n}\n.cardViewport .item .instructor5 {\n  background-image: url('mylesLawrence.png');\n}\n.cardViewport .item .instructor6 {\n  background-image: url('jenniferWilliamson.png');\n}\n.cardViewport .item .instructor7 {\n  background-image: url('generic.png');\n}\n.cardViewport .item .instructor8 {\n  background-image: url('mitchRomney.png');\n}\n.cardViewport .item .instructor9 {\n  background-image: url('generic.png');\n}\n.cardViewport .item .seeBioBtn {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  margin-top: 20px;\n  background-image: url('menuIcon.png');\n  background-size: cover;\n  cursor: pointer;\n}\n@media screen and (max-width: 1200px) {\n  .cardViewport .scaled {\n    transform: scale(1.15);\n    transition: 0.2s;\n  }\n}\n.cardViewport .bioDisplay {\n  transform: none;\n  transition: none;\n}\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvYmJhbGR3aW4vTXlDb2RlUHJvamVjdHMvZnJlZWxhbmNlV29yay9NaWxlc0FoZWFkTXVzaWMtbmcvc3JjL2FwcC90ZWFjaGVyLWRpc3BsYXkvdGVhY2hlci1kaXNwbGF5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90ZWFjaGVyLWRpc3BsYXkvdGVhY2hlci1kaXNwbGF5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUFBO0lBRVEsc0JBQUE7SUFDQSxnQkFBQTtFQ0VWO0FBQ0Y7QURiQTtFQWVRLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtBQ0NSO0FER1E7RUFBQTtJQUVJLGFBQUE7SUFDQSxZQUFBO0VDRFY7QUFDRjtBRGxDQTtFQXdDWSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSFo7QUR6Q0E7RUErQ1ksMENBQUE7QUNIWjtBRDVDQTtFQWtEWSx5Q0FBQTtBQ0haO0FEL0NBO0VBcURZLDJDQUFBO0FDSFo7QURsREE7RUF3RFksMkNBQUE7QUNIWjtBRHJEQTtFQTJEWSwwQ0FBQTtBQ0haO0FEeERBO0VBOERZLCtDQUFBO0FDSFo7QUQzREE7RUFpRVksb0NBQUE7QUNIWjtBRDlEQTtFQW9FWSx3Q0FBQTtBQ0haO0FEakVBO0VBdUVZLG9DQUFBO0FDSFo7QURwRUE7RUEwRVksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0haO0FEUUk7RUFBQTtJQUVRLHNCQUFBO0lBQ0EsZ0JBQUE7RUNOVjtBQUNGO0FEbkZBO0VBNEZRLGVBQUE7RUFDQSxnQkFBQTtBQ05SO0FEV0E7RUFDSSxhQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyLWRpc3BsYXkvdGVhY2hlci1kaXNwbGF5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRWaWV3cG9ydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgLml0ZW06aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDU2LCA1MywgNTMpLCByZ2IoMzEsIDI5LCAyOSkpO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnN0cnVjdG9yUGhvdG8ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluc3RydWN0b3Ixe1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9tYWRpc29uTW9saW5lLnBuZycpO1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0cnVjdG9yMiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2phc29uRnVsbG1lci5wbmcnKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5zdHJ1Y3RvcjMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9hdXN0aWVSb2JpbnNvbi5wbmcnKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5zdHJ1Y3RvcjQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9uZWxzZW5DYW1wYmVsbC5wbmcnKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5zdHJ1Y3RvcjUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9teWxlc0xhd3JlbmNlLnBuZycpO1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0cnVjdG9yNiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2plbm5pZmVyV2lsbGlhbXNvbi5wbmcnKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5zdHJ1Y3Rvcjcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvc2l0ZS1tZWRpYS9nZW5lcmljLnBuZycpO1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0cnVjdG9yOCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21pdGNoUm9tbmV5LnBuZycpO1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0cnVjdG9yOSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2dlbmVyaWMucG5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlZUJpb0J0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWVudUljb24ucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAuc2NhbGVkIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJpb0Rpc3BsYXkge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgfVxuXG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwiLmNhcmRWaWV3cG9ydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmRWaWV3cG9ydCAuaXRlbTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMzODM1MzUsICMxZjFkMWQpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJkVmlld3BvcnQgLml0ZW0ge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5pbnN0cnVjdG9yUGhvdG8ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuaW5zdHJ1Y3RvcjEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21hZGlzb25Nb2xpbmUucG5nJyk7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5pbnN0cnVjdG9yMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvamFzb25GdWxsbWVyLnBuZycpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuaW5zdHJ1Y3RvcjMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2F1c3RpZVJvYmluc29uLnBuZycpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuaW5zdHJ1Y3RvcjQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL25lbHNlbkNhbXBiZWxsLnBuZycpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuaW5zdHJ1Y3RvcjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL215bGVzTGF3cmVuY2UucG5nJyk7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5pbnN0cnVjdG9yNiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvamVubmlmZXJXaWxsaWFtc29uLnBuZycpO1xufVxuLmNhcmRWaWV3cG9ydCAuaXRlbSAuaW5zdHJ1Y3Rvcjcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL2dlbmVyaWMucG5nJyk7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5pbnN0cnVjdG9yOCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvbWl0Y2hSb21uZXkucG5nJyk7XG59XG4uY2FyZFZpZXdwb3J0IC5pdGVtIC5pbnN0cnVjdG9yOSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3NpdGUtbWVkaWEvZ2VuZXJpYy5wbmcnKTtcbn1cbi5jYXJkVmlld3BvcnQgLml0ZW0gLnNlZUJpb0J0biB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9zaXRlLW1lZGlhL21lbnVJY29uLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmRWaWV3cG9ydCAuc2NhbGVkIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cbi5jYXJkVmlld3BvcnQgLmJpb0Rpc3BsYXkge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _get_teacher_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-teacher-list.service */ "./src/app/get-teacher-list.service.ts");



var TeacherDisplayComponent = /** @class */ (function () {
    function TeacherDisplayComponent(getTeachers) {
        this.getTeachers = getTeachers;
        this.teachers = this.getTeachers.teachers;
        this.indexCounter = this.teachers.length;
    }
    TeacherDisplayComponent.prototype.ngAfterViewInit = function () {
        setTimeout(this.createTeacherDisplay, 1000);
    };
    TeacherDisplayComponent.prototype.displayTeacherBio = function (teacherID) {
        console.log('function called for ' + teacherID);
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id == teacherID) {
                var photo = this.teachers[i].photo;
                document.getElementById(teacherID + "BioPhoto").style.backgroundImage = "url(\"../../assets/site-media/" + photo + "\")";
                document.getElementById(teacherID + "Bio").classList.remove('hidden');
                // if(document.getElementById('bioView')){
                //   console.log('done');
                // }
            }
        }
    };
    TeacherDisplayComponent.prototype.mobileScrollStackCheck = function () {
        if (document.getElementById('cardViewport')) {
            var view = document.getElementById('cardViewport').getBoundingClientRect();
            for (var i = 0; i < this.teachers.length; i++) {
                var card = document.getElementById(this.teachers[i].id);
                var rect = card.getBoundingClientRect();
                if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                    this.toTopOfStack(this.teachers[i].id);
                    card.classList.add("scaled");
                    for (var a = 0; a < this.teachers.length; a++) {
                        if (a !== i) {
                            document.getElementById(this.teachers[a].id).classList.remove("scaled");
                        }
                    }
                }
                if (i == 0 && view.top > 130) {
                    document.getElementById(this.teachers[i].id).classList.remove("scaled");
                }
                if (i == (this.teachers.length - 1) && rect.top < -30) {
                    document.getElementById(this.teachers[i].id).classList.remove("scaled");
                }
            }
        }
    };
    TeacherDisplayComponent.prototype.toTopOfStack = function (boxId) {
        var el = document.getElementById(boxId);
        el.style.zIndex = "" + this.teachers.length;
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id === boxId) {
                var lowIndexCounter = 1;
                var highIndexCounter = this.teachers.length - 1;
                for (var a = 0; a < this.teachers.length; a++) {
                    if (a < i) {
                        document.getElementById(this.teachers[a].id).style.zIndex = "" + lowIndexCounter;
                        lowIndexCounter++;
                    }
                    if (a > i) {
                        document.getElementById(this.teachers[a].id).style.zIndex = "" + highIndexCounter;
                        highIndexCounter--;
                    }
                }
                break;
            }
        }
    };
    TeacherDisplayComponent.prototype.createTeacherDisplay = function () {
        // if(window.innerWidth < 1200){
        //   this.indexCounter = this.teachers.length;
        // window.addEventListener('scroll', () => {this.mobileScrollStackCheck()});
        // for(let i=0; i<this.teachers.length; i++){
        //   let projectId = this.teachers[i].id;
        //   let el = document.getElementById(this.teachers[i].id);
        //   el.style.top = `${40 * i}vh`;
        //   el.style.zIndex = `${this.indexCounter}`;
        //   this.indexCounter--;
        // }
        // document.getElementById("cardViewport").style.height = `calc(${this.teachers.length * 50}vh - 50vh + 30px)`;
        // } else {
        // for(let i=0; i<this.teachers.length; i++){
        //   let el = document.getElementById(this.teachers[i].id);
        //   el.style.top = "0";
        //   // el.classList.remove('scaled');
        // }
        // document.getElementById("cardViewport").style.height = "auto";
        // }
    };
    TeacherDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-display',
            template: __webpack_require__(/*! ./teacher-display.component.html */ "./src/app/teacher-display/teacher-display.component.html"),
            styles: [__webpack_require__(/*! ./teacher-display.component.less */ "./src/app/teacher-display/teacher-display.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_teacher_list_service__WEBPACK_IMPORTED_MODULE_2__["GetTeacherListService"]])
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

module.exports = __webpack_require__(/*! /Users/jacobbaldwin/MyCodeProjects/freelanceWork/MilesAheadMusic-ng/src/main.ts */"./src/main.ts");


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