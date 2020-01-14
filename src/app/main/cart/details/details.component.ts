import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "softbook-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      // console.table(param.getAll());
    });
    console.log(this.route.snapshot.paramMap.get("name"));

    this.route.queryParamMap.subscribe(query => {
      console.log(query.get("desc"));
    });
  }

  goToBrowse(): void {
    this.router.navigate(["browse", 1, 2], {});
  }
}
