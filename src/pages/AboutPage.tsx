import { Layout } from '../components/Layout';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FoundersNote } from '../components/FoundersNote';
import { CreatorsNote } from '../components/CreatorsNote';

export function AboutPage() {
    return (
        <Layout>
            <div className="pt-10">
                <About />
                <FoundersNote />
                <CreatorsNote />
                <WhyChooseUs />
            </div>
        </Layout>
    );
}
