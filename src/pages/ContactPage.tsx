import { Layout } from '../components/Layout';
import { Contact } from '../components/Contact';

export function ContactPage() {
    return (
        <Layout>
            <div className="pt-10">
                <Contact />
            </div>
        </Layout>
    );
}
