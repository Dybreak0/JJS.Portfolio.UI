import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/about/about.component").then(c => c.AboutComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./core/auth/login/login.component").then(c => c.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./core/auth/register/register.component").then(c => c.RegisterComponent)
  },
  {
    path: "contact",
    loadComponent: () => import("./features/contact/contact.component").then(c => c.ContactComponent),
  },
  {
    path: "projects",
    loadComponent: () => import("./features/projects/projects.component").then(c => c.ProjectsComponent),
  },
  {
    path: "settings",
    loadComponent: () => import("./features/settings/settings.component").then(c => c.SettingsComponent),
  },
];
