import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  leftHTML: string;
  rightHTML: string;

  constructor() { }

  ngOnInit() {
    this.leftHTML = '<img src="assets/img/notfound/rosmalen-map.jpg" style="width: 333px; height:471px; margin-left:120px;" />';
    this.rightHTML = '<div _ngcontent-ptb-c1="" class="mu-contact-right"><div _ngcontent-ptb-c1="" class="mu-contact-widget"><h3 _ngcontent-ptb-c1="">Adres</h3><p _ngcontent-ptb-c1="">Goede Koffie | Lekkere Wijn | Speciaal Bier | Hapjes | Drankjes | Lunch | Vrijdagavond BigBottles | Live Muziek | Thema Avonden | & nog veel meer!</p><address _ngcontent-ptb-c1=""><p _ngcontent-ptb-c1=""><i _ngcontent-ptb-c1="" class="fa fa-phone"></i> (073) 689 7641</p><p _ngcontent-ptb-c1=""><i _ngcontent-ptb-c1="" class="fa fa-envelope-o"></i>info@cafebottles.nl</p><p _ngcontent-ptb-c1=""><i _ngcontent-ptb-c1="" class="fa fa-map-marker"></i>De Driesprong 34, 5241 TJ, Rosmalen</p></address></div><div _ngcontent-ptb-c1="" class="mu-contact-widget"><h3 _ngcontent-ptb-c1="">Openingstijden</h3><address _ngcontent-ptb-c1=""><p _ngcontent-ptb-c1=""><span _ngcontent-ptb-c1="">Ma</span> 11:00 - 00:00</p><p _ngcontent-ptb-c1=""><span _ngcontent-ptb-c1="">Di - Wo</span> 10:00 - 00:00</p><p _ngcontent-ptb-c1=""><span _ngcontent-ptb-c1="">Do - Za</span>  10:00 - 02:00</p><p _ngcontent-ptb-c1=""><span _ngcontent-ptb-c1="">Zondag</span> 11:00 - 00:00</p></address></div></div>';
  }
}
