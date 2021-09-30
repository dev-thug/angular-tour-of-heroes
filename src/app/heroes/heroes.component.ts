import {Component, OnInit} from '@angular/core';
import {HEROES} from "../mock-heroes";
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes', // 컴포넌트의 CSS 엘리먼트 셀럭터
  templateUrl: './heroes.component.html', // 컴포넌트 템플릿 파일의 위치
  styleUrls: ['./heroes.component.css'] // 컴포넌트 CSS 스타일 파일의 위치
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
