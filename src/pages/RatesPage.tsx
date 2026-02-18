import { Layout } from '../components/Layout';
import { Rates } from '../components/Rates';
import { Rules } from '../components/Rules';
import { NextSteps } from '../components/NextSteps';

export function RatesPage() {
    return (
        <Layout>
            <div className="pt-10">
                <Rates />
                <Rules />
                <NextSteps />
            </div>
        </Layout>
    );
}
