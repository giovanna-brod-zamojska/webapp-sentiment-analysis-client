import { Component } from '@angular/core';
import { SentimentAnalysisService } from '../../services/sentiment-analysis.service';

@Component({
  selector: 'app-roberta',
  templateUrl: './roberta.component.html',
  styleUrls: ['./roberta.component.css']
})

export class RobertaComponent {
  textToAnalyze: string='';
  sentimentResults: any;

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {}

  analyzeText(): void {
    this.sentimentAnalysisService.analyzeSentiment(this.textToAnalyze).subscribe(
      (response) => {
        this.sentimentResults = response;
        console.log(this.sentimentResults);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

