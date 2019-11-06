import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { SongManagerComponent } from "./guards/song-manager/song-manager.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./login/auth.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "playlist", component: PlaylistsComponent, canActivate: [AuthGuard] },
  {
    path: "playlist/:id",
    component: SongManagerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
