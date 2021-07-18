export class Quote {
    showFullDetails: boolean;
    constructor(public description: string, public author: string, public submittedby: string, public upvotes: number,  public downvotes: number,public completeDate: Date,){
        this.showFullDetails = false
    }
}
