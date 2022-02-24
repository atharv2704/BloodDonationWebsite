import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EligibilityService {
  public criteria = ["No Recent Donation(before 90 Days)",
                      "No Alcohol Consumed before 24 Hours",
                      "Not a Minor?",
                      "Haemoglobin above 12?"];
  constructor() { }
}
