import { Component, OnInit } from '@angular/core';
import { GhApiService } from '../../service/gh-api.service';
import { ghUser } from '../models/ghUser';
import { usRepor } from '../models/usRepor';
@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: ghUser | null = null

  repo: string = ''
  repor: usRepor [] | undefined

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (ghUser) => {
        this.user = ghUser
        console.log(this.user?.login)
      }
    )
    this.ghService.findRepos(this.username).subscribe(
      (usRepor) => {
        this.repor = usRepor
        console.log(this.user?.login)
      }
    )
    
    
    
  }

}
