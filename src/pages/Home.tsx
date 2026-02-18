import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { CraftingStories } from '../components/CraftingStories';
import { About } from '../components/About';
import { FoundersNote } from '../components/FoundersNote';
import { CreatorsNote } from '../components/CreatorsNote';
import { WhyChooseUs } from '../components/WhyChooseUs';


export function Home() {
    return (
        <Layout>
            <Hero />
            <CraftingStories />
            <About />
            <FoundersNote />
            <CreatorsNote />
            <WhyChooseUs />
        </Layout>
    );
}
