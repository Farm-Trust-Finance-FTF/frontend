import BaseLayout from "layout/Base";
import { teamItems } from "../../data/teamItems";

const index = () => {
  return (
    <BaseLayout>
      <section className="mt-20">
        <h1 className="font-bold text-[28px] w-full lg:max-w-[60%]">About</h1>
        <div className="lg:w-[560px] pt-5 space-y-4">
          <p>
            Smallholder farmers face big challenges. Limited access to financial
            services, unpredictable weather, and traditional loan woes keep them
            from reaching their potential. FTF is here to change that.
          </p>
          <div className="space-y-3">
            <p>
              We're a blockchain-powered platform offering a suite of tools to
              help farmers thrive:
            </p>
            <ul className="ml-6 space-y-2 list-disc lg:ml-11">
              <li>
                Weatherproof parametric insurance to protect against climate
                shocks
              </li>
              <li>Smart loans for farm improvements and emergencies</li>
              <li>
                Expert farming tips for sustainable practices and higher yields
              </li>
              <li>Cross-border transfers to send money with ease</li>
              <li>Marketplace</li>
              <li>Supply-Chain</li>
              <li>Climate alerts to adapt to changing conditions</li>
            </ul>
          </div>
          <p>
            FTF is more than just tech. It's about building a community of
            support and empowerment. Join us as we unlock financial security,
            climate resilience, and a more sustainable food system for
            smallholder farmers worldwide.
          </p>
          <p>Together, we can grow a brighter future for agriculture.</p>
        </div>
      </section>
    </BaseLayout>
  );
};

export default index;
