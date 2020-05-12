import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.css']
})
export class CustomerCareComponent implements OnInit {

  public infoFaq1 = [
    {
      titulo: 'How do I track my order?',
      texto: 'I´m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
    },
    {
      titulo: 'What are your delivery options?',
      texto: 'Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
    },
    {
      titulo: 'How do I return an item?',
      texto:'Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
    }
  ];

  public infoFaq2 = [
    {
      titulo: 'How can I contact your couriers?',
      texto:'Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
    },
    {
      titulo: 'Do you provide International delivery?',
      texto:'Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
    },{
      titulo: 'What is your returns policy?',
      texto:'Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
