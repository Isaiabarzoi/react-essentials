import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concept">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcept key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
