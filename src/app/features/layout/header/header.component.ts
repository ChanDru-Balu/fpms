import { Component } from '@angular/core';
import { TextCaseDirective } from '../../../core/common/directive/text-case.directive';

@Component({
  selector: 'app-header',
  imports: [TextCaseDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  case = 'uppercase';
}
