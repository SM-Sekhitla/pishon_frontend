import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Pishon Executive Search</title>
        <meta
          name="description"
          content="Terms and conditions for Pishon Executive Search services including professional fees, payment terms, and guarantees."
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
                Terms & <span className="text-primary">Conditions</span>
              </h1>

              {/* Professional Fees */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Professional Fees and Expenses
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our normal professional fees are billed at 30% of the total first year's estimated compensation for each position we are seeking to fill. This fee is structured as a retainer, invoiced in three parts during the engagement, and a final balancing payment on successful placement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For fee calculation purposes, estimated first year compensation includes base salary, plus company contributions to benefits such as travel allowance, fleet card, pension and medical aid, as well as any guaranteed bonus plus any sign-on bonus (but not including long term incentive).
                </p>
              </section>

              {/* Invoice Settlement Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  Invoice Settlement Terms
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="text-lg font-bold text-primary mb-3">Phase I: Confirmation</h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• One third of the fee</li>
                      <li>• Issued on confirmation of the assignment</li>
                      <li>• Payable on presentation of invoice</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="text-lg font-bold text-primary mb-3">Phase II: Shortlist</h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• One third of the fee</li>
                      <li>• Issued on acceptance of suitable shortlist</li>
                      <li>• Payable on presentation of invoice</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="text-lg font-bold text-primary mb-3">Phase III: Placement</h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• One third of the fee, adjusted based on actual package</li>
                      <li>• Issued on acceptance of job offer</li>
                      <li>• Payable on presentation of invoice</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Secondary Placements */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Secondary Placements
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event that more than one person is hired from a shortlist as a result of the work performed by Pishon Executive Search, a full professional fee will be due and calculated at 18% (excluding VAT) of the total first year's estimated total cost to company package for each additional individual appointed.
                </p>
              </section>

              {/* Direct Expenses */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Direct Expenses
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These expenses are the direct cost of travel, video-conference interviews (if necessary), meals and hotels associated with the interviewing and selection process of potential candidates. It also includes any specific external research costs required for these assignments and advertising. Each month, during the course of the project, an invoice will be submitted to you for reimbursement of these expenses. Travel arrangements and costs will always be agreed with you in advance.
                </p>
              </section>

              {/* Psychometric Assessments */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Psychometric Assessments
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  In partnership with Larona Consulting, Pishon Executive Search offers leadership assessments for the top two candidates on our executive search and specialised skills short-list at no additional cost. We offer a wide range of psychometric, leadership and competency assessments and the specific battery for your position will be discussed with the selection committee and agreed upon before administration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Should you require more than two people on the short-list to be assessed, a fee per additional person will apply. Generally, the value of assessments is between R15,000 (excluding VAT) and R20,000 (excluding VAT) per person. This cost includes administration of the assessments, analysis, interpretation and report writing, as well as verbal feedback to you and the candidates.
                </p>
              </section>

              {/* Feedback */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Feedback
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">To Stakeholders:</strong> Feedback is given verbally and in the form of a written report. It highlights the strengths and development areas of each candidate, analyses the job-person-match, compares candidates against each other and provides the implications of the profiles for the team.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">To Candidates:</strong> Feedback is given regardless of whether they are appointed to the position or not. It is also given verbally and in writing from a developmental perspective, facilitating self-insight and providing opportunities to discuss personal development interventions.
                  </p>
                </div>
              </section>

              {/* Cancellation Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Cancellation Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If a client wishes to cancel an engagement, written notification of the cancellation must be provided. The client will be liable to pay all outstanding fees up to the point of cancellation and any expenses incurred to the date of receipt of notification. If a client withdraws a written offer of employment after it has been accepted by the candidate concerned, through no fault of the candidate, the full fee will be payable by the client. In the event of a change to the agreed job specification, Pishon Executive Search reserves the right to charge additional professional fees and expenses.
                </p>
              </section>

              {/* Internal Candidates */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Internal Candidates
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Often during a search assignment, an organisation will identify possible candidates already in the company's employment or receive direct applications. It is common practice that these candidates be forwarded to Pishon Executive Search for evaluation with other candidates discovered through the search process. This ensures you receive extra benefit of feedback on internal or direct candidates and a more accurate, thorough and professional outcome. If an internal or direct response candidate is subsequently appointed from the search process, our full professional fee for this assignment will apply.
                </p>
              </section>

              {/* Deferred Hiring */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Deferred Hiring / Third Party Employment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Introductions effected by Pishon Executive Search are strictly confidential. If a client passes on a candidate or the details of a candidate introduced by Pishon Executive Search to a third party or hires with a deferred timeline within 18 months of Pishon Executive Search's introduction, the client is liable for the appropriate permanent placement fee as specified above.
                </p>
              </section>

              {/* Multiple Placements */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Multiple Placements
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Should a second and/or subsequent placement be made as a result of this search (within 18 months from commencement of the assignment) an additional professional fee with a discount will be charged and all other terms including administrative expenses etc will remain as defined above.
                </p>
              </section>

              {/* Guarantee */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Guarantee
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event that the candidate appointed from our search process withdraws before assuming their position or leaves the job or is terminated within the first 12 months of the hiring date, we shall restart the assignment without charging additional professional fees.
                </p>
              </section>

              {/* Off Limits */}
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  Off Limits
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As part of our protection policy, we agree not to recruit executive level employees from a client for a specified period of time. Candidates hired as a result of our search process will be protected as long as they are retained by the company. We will not recruit executives from the company that report directly to the person hired by our recruitment process, or their superior for a period of 12 months.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
