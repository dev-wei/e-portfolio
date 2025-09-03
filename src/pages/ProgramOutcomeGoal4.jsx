import '../App.css';
import { useEffect, useRef } from 'react';

function ProgramOutcomeGoal4() {
  const literatureRef1 = useRef(null);
  const literatureRef2 = useRef(null);
  const researchRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const refs = [literatureRef1, literatureRef2, researchRef];
    
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="page-content">
      <h2>Program Outcome Goal 4</h2>
      <p>As part of my dental hygiene education, I have conducted comprehensive research and literature reviews to deepen my understanding of evidence-based practice in oral healthcare. Below are my research contributions that demonstrate critical thinking and analytical skills essential for professional practice.</p>
      
      <h3>Literature Review 1</h3>
      <p>This literature review examines current research and evidence-based practices in dental hygiene, focusing on preventive care strategies and their effectiveness in promoting optimal oral health outcomes.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={literatureRef1} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe 
             src="./images/literature-review-1.pdf"
             width="100%" 
             height="600px"
             style={{ 
               border: 'none',
               borderRadius: '8px',
               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
             }}
             title="Literature Review 1"
           >
             <p>Your browser does not support iframes. <a href="./images/literature-review-1.pdf" target="_blank" rel="noopener noreferrer">Download Literature Review 1</a></p>
           </iframe>
        </div>

        <p></p>
        <div className="reflection-text">
            <h4>Reflection on The Correlation Between Age and Periodontal Disease</h4>
            <p>
              This review reinforced for me the importance of considering age when assessing oral health risks. 
              I found it eye-opening that gingivitis peaks in adolescence, aggressive periodontitis in 
              adulthood, and chronic periodontitis in later life. The weak but positive correlation between 
              age and severity highlights how cumulative exposure to plaque and tissue degeneration play a 
              role, but it was encouraging to see that preventive care can change outcomes even for older adults.
            </p>
            <p>
              Reflecting on this, I realize how vital it is for dental professionals to tailor care across 
              the lifespan, using preventive strategies to slow disease progression. The study also made me 
              think about how population-level insights must always be balanced with individualized care, 
              since not all elderly people experience severe periodontal disease.
            </p>
          </div>
      </div>
      
      <h3>Literature Review 2</h3>
      <p>This second literature review explores advanced topics in dental hygiene research, examining emerging technologies and innovative approaches to patient care in modern dental practice.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={literatureRef2} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe 
             src="./images/literature-review-2.pdf"
             width="100%" 
             height="600px"
             style={{ 
               border: 'none',
               borderRadius: '8px',
               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
             }}
             title="Literature Review 2"
           >
             <p>Your browser does not support iframes. <a href="./images/literature-review-2.pdf" target="_blank" rel="noopener noreferrer">Download Literature Review 2</a></p>
           </iframe>
        </div>
          
        <p></p>
        <div className="reflection-text">
            <h4>Reflection on Transforming Dental Caries Diagnosis Through Artificial Intelligence-Based Techniques</h4>
            <p>
              This literature review showed me how rapidly artificial intelligence is reshaping dental practice. 
              I was struck by the potential of AI, particularly deep learning and CNNs, to overcome the 
              limitations of traditional caries diagnosis that often rely on subjective interpretation. 
              The examples of Pearl, Overjet, and Denti.AI demonstrate that AI tools are already making 
              their way into clinical workflows, showing that this is not just a theoretical discussion 
              but a tangible transformation.
            </p>
            <p>
              At the same time, the review pointed out critical challenges—privacy, bias, and legal 
              frameworks—that need to be addressed. It made me reflect on how important it is for future 
              dental professionals to not only adopt technology but also to critically engage with its 
              ethical and practical implications.
            </p>
          </div>
      </div>
      
      <h3>Research Paper</h3>
      <p>This original research paper represents my independent investigation into a specific aspect of dental hygiene practice, demonstrating my ability to conduct scholarly research and contribute to the body of knowledge in oral healthcare.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={researchRef} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe 
             src="./images/research-paper.pdf"
             width="100%" 
             height="600px"
             style={{ 
               border: 'none',
               borderRadius: '8px',
               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
             }}
             title="Research Paper"
           >
             <p>Your browser does not support iframes. <a href="./images/research-paper.pdf" target="_blank" rel="noopener noreferrer">Download Research Paper</a></p>
           </iframe>
        </div>
        
        <p></p>
        <div className="reflection-text">
          <h4>Reflection on Otto Walkhoff: Father of Dental X-Rays</h4>
          <p>
            This paper highlights Otto Walkhoff's groundbreaking role in dental radiology and endodontics, 
            offering both admiration and caution. His achievement of taking the world's first dental 
            radiograph and opening the first radiology lab forever changed diagnostics in dentistry. 
            I found it inspiring to see how his dedication to advancing dental education and formalizing 
            training raised dentistry's credibility as a true medical profession.
          </p>
          <p>
            At the same time, the paper reminded me of the complexity of human legacy—while his scientific 
            contributions were remarkable, his affiliation with the Nazi Party creates lasting controversy. 
            Reflecting on this, I see how professional achievements can coexist with problematic personal 
            choices, making it essential to evaluate historical figures in their full context.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default ProgramOutcomeGoal4;