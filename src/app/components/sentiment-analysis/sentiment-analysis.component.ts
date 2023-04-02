import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})

export class SentimentAnalysisComponent {
    text: string = '';
    sentimentScore: number | null = null;
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {} // Inject the HttpClient module

    onSubmit(): void{
      
      this.http.post<{ score: number}>(`${this.baseUrl}/api/sentiment`, { text: this.text })
        .subscribe((response:any) => {
          this.sentimentScore = response.score;
        });

    }
}


