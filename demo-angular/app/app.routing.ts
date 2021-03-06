import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CreditCardViewComponent } from "./demo/creditcardview.component";
import { HomeComponent } from "./demo/home.component";
import { StandardComponent } from "./demo/standard.component";
import { IntentComponent } from "./demo/intent.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "std", component: StandardComponent },
  { path: "ccview", component: CreditCardViewComponent },
  { path: "intent", component: IntentComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }