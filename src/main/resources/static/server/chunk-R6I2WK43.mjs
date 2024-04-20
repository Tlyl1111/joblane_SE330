import './polyfills.server.mjs';
import {
  RouterOutlet,
  bootstrapApplication,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-TROXP2OV.mjs";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 10 });
})();

// src/app/pages/sign-in/sign-in.component.ts
var _SignInComponent = class _SignInComponent {
};
_SignInComponent.\u0275fac = function SignInComponent_Factory(t) {
  return new (t || _SignInComponent)();
};
_SignInComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignInComponent, selectors: [["app-sign-in"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 0, consts: [[1, "top", "text-center", "my-5"], ["src", "/src/public/img/Logo/logo-01 1 (1).svg", "alt", "logo", 1, "custom-logo"], ["id", "login", "action", "/auth", "method", "post", 1, "mb-5", "w-30", "mx-auto"], [1, "form-group", "mb-3"], ["for", "exampleInputEmail1", 1, "login-label"], ["type", "email", "name", "Email", "id", "Email", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPassword1", 1, "login-label"], ["type", "password", "name", "Password", "id", "Password", 1, "form-control"], [1, "form-group", "d-flex", "justify-content-between", "mb-3"], [1, "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label", "sub-label"], ["href", "#"], [1, "form-group"], ["type", "submit"]], template: function SignInComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "body")(1, "div", 0);
    \u0275\u0275element(2, "img", 1);
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Joblane - Your Journey to the Right Job!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 2)(8, "div", 3)(9, "label", 4);
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 3)(13, "label", 6);
    \u0275\u0275text(14, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9);
    \u0275\u0275element(18, "input", 10);
    \u0275\u0275elementStart(19, "label", 11);
    \u0275\u0275text(20, "Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "a", 12);
    \u0275\u0275text(23, "Forget Password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "button", 14);
    \u0275\u0275text(26, "Log in");
    \u0275\u0275elementEnd()()()();
  }
}, styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit&display=swap";\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  background-color: white;\n}\n.w-30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 104px;\n}\n.form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px;\n  background-color: #2ED5A4;\n  border-radius: 100px;\n  border: none;\n  font-size: 20px;\n  line-height: 30px;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fefefe;\n  border: 1px solid #2E3F49;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  accent-color: #2ED5A4;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.forget-pw[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 800;\n}\n.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 27px;\n  font-weight: 400;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 27px;\n  font-weight: 400;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 27px;\n  font-weight: 500;\n}\na[_ngcontent-%COMP%] {\n  color: #2ED5A4;\n}\n/*# sourceMappingURL=sign-in.component.css.map */'] });
var SignInComponent = _SignInComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignInComponent, { className: "SignInComponent", filePath: "src\\app\\pages\\sign-in\\sign-in.component.ts", lineNumber: 9 });
})();

// src/app/pages/sign-in-1/sign-in-1.component.ts
var _SignIn1Component = class _SignIn1Component {
};
_SignIn1Component.\u0275fac = function SignIn1Component_Factory(t) {
  return new (t || _SignIn1Component)();
};
_SignIn1Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignIn1Component, selectors: [["app-sign-in-1"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function SignIn1Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "sign-in-1 works!");
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=sign-in-1.component.css.map */"] });
var SignIn1Component = _SignIn1Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignIn1Component, { className: "SignIn1Component", filePath: "src\\app\\pages\\sign-in-1\\sign-in-1.component.ts", lineNumber: 10 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "sign-in", component: SignInComponent, pathMatch: "full" },
  { path: "sign-in-1", component: SignIn1Component, pathMatch: "full" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-R6I2WK43.mjs.map
