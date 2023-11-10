import TwoColumnSection from './TwoColumnSection';
import one from '/public/images/one.svg';
import two from '/public/images/two.svg';
import three from '/public/images/three.svg';
import four from '/public/images/four.svg';
import five from '/public/images/five.svg';
import six from '/public/images/six.svg';
import seven from '/public/images/seven.svg';
import eight from '/public/images/eight.svg';
import nine from '/public/images/nine.svg';
import ten from '/public/images/ten.svg';
import eleven from '/public/images/eleven.svg';
import twelve from '/public/images/twelve.svg';
import thirteen from '/public/images/thirteen.svg';
import fourteen from '/public/images/fourteen.svg';
import fifteen from '/public/images/fifteen.svg';

const Services = () => {
  return (
    <div className="max-w-[1268px] px-4 mx-auto text-white">
      <div id="services" name="services">
        <h2 data-aos="fade-up" className="font-GilroyBlack font-black text-white text-center text-[66px] leading-[86px] capitalize mb-2.5">
          Our Services
        </h2>
        <p data-aos="fade-up" className="text-lg text-white max-w-[978px] mx-auto text-center">
          Our services cover all the digital transformation and information technology aspects, starting from the digital transformation strategy, data strategy, and enterprise architecture to governance, auditing and execution and monitoring of the digital projects, processes and changes.
        </p>
      </div>
      <div className="flex flex-col gap-[120px] lg:gap-[180px] mt-[130px]">
        <TwoColumnSection
          imgSrc={one}
          lineOne={'Digital Transformation '}
          lineTwo={'Strategy'}
          para={`To win in the digital era you need a bold ambition and flawless execution. We would help with both. Our multidisciplinary teams of technical experts work side-by-side with you to design, build, and scale truly transformative digital businesses, by adopting the suitable technologies that would enable your business to improve customer experience, have higher process efficiency, increase agility, reduce the cost, gain competitive advantages, improve employee performance, have better visibility and improve collaboration.
`}
          classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'}
          name="one"
        />

        <TwoColumnSection imgSrc={two} lineOne={'Data strategy, data '} lineTwo={'analysis and visualization'} para={`A data strategy is a long-term plan that defines the technology, processes, people, and rules required to manage your organization's information assets. Your organization collect large amounts of raw data. However, you need a well-thought-out data management and analysis plan if you want to use this information to make informed decisions.`} classes={'lg:flex-reverse lg:flex-row'} name="two" />

        <TwoColumnSection imgSrc={three} lineOne={'Business processes '} lineTwo={'automation'} para={`By automation, your business would become more efficient and cost effective. We would help you to provide automation awareness, identify the repetitive tasks that can be automated and implement the automation for the nominated processes. Our experts will select the most suitable technology for each automation opportunity, be it RPA, integration, business intelligence or any other technology that most fit your business needs and the nature of the process.`} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="three" />

        <TwoColumnSection imgSrc={four} lineOne={'Enterprise '} lineTwo={'Architecture'} para={`we help you establish an enterprise architecture scaled to your real needs. Our business, application, data and technology architects deliver services that span a wide spectrum. If your business needs a support player who can be a discussion partner, or if your business want an assistance in introducing enterprise architecture as a function, we could help you in both options. Our consultants have over time worked with this for both private and public organizations and deliver services that are adapted to your needs`} classes={'lg:flex-reverse lg:flex-row'} name="four" />

        <TwoColumnSection imgSrc={five} lineOne={'Enterprise '} lineTwo={'IT Governance'} para={`Our experts will help you in all industries in the area of IT governance. Starting by applying different regulations governing the protection of confidential information, financial accountability, data retention, and incident recovery. To ensure your company meets internal and external requirements, our experts help you by implementing a formal IT governance program that provides a framework of best practices and controls.`} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="five" />

        <TwoColumnSection imgSrc={six} lineOne={'IT & Technology'} lineTwo={'Auditing'} para={`Our IT Audit practice has recognized capabilities and subject matter experience assisting clients in understanding areas of business and industry risk (governance, process, operations, and IT) that translates and aligns IT risk components to the business, with the ability to go beyond a company’s standard areas of IT controls and to ensure business-IT alignment. We are using the known methodologies and frameworks like COBIT, ISO, and ITIL.`} classes={'lg:flex-reverse lg:flex-row'} name="six" />

        <TwoColumnSection imgSrc={seven} lineOne={'Business continuity & '} lineTwo={'Disaster recovery (BCDR)'} para={`Disaster can come in many forms: an extended power outage, a corrupted database, or a vandalized server, not to mention a fire, storm, disappear of critical employee, supply chain issues, or earthquake. iiT can help your organization develop an effective plan for continuing business operations in the event of catastrophe. Using our time-tested framework, we work with key members of your organization to develop a robust plan that will perform in a business crisis.`} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="seven" />

        <TwoColumnSection
          imgSrc={eight}
          lineOne={'Risk assessment '}
          lineTwo={'and management'}
          para={`Safeguard your business against potential threats with our advisory services. We're experts in risk management, and our aim is to augment the value you offer to stakeholders. Trust our business risk services to fortify the future and success of your venture.
Understanding the risks your business might encounter is crucial. From global financial downturns to the surge in cyber threats, we detect risks early and take timely action. This is where our risk advisory specialists step in to provide unmatched expertise.`}
          classes={'lg:flex-reverse lg:flex-row'}
          name="eight"
        />

        <TwoColumnSection
          imgSrc={nine}
          lineOne={'Cyber Security'}
          lineTwo={''}
          para={`As companies pivot more toward digital business models, exponentially more data is generated and shared among organizations, partners and customers. This digital information has become the lifeblood of the interconnected business ecosystem and is increasingly valuable to organizations—and to skilled threat actors. Increasing digitization also means companies are exposed to new digital vulnerabilities, making an effective approach to cybersecurity and digital trust more important than ever.
At iiT, we help our clients transform from value protectors to value creators by building trust, promoting resilience and enabling the business. We are here to help you transform your organization and drive growth, while staying resilient and preparing for the unexpected
`}
          classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'}
          name="nine"
        />

        <TwoColumnSection imgSrc={ten} lineOne={'ERP, CRM, CDP '} lineTwo={'& Business applications implementation & Support'} para={`The foundational digital platforms are keys for a successful digital transformation journey in any organization. Identifying the needs, comparing the options in the market, managing and executing a successful implementation is not an easy journey.`} classes={'lg:flex-reverse lg:flex-row'} name="ten" />

        <TwoColumnSection imgSrc={eleven} lineOne={'CIO as a '} lineTwo={'service (vCIO)'} para={`Ever noticed a disconnect between your business requirements and what IT actually delivers? Even the slightest misalignment can significantly impact your ability to service customers and keep your staff engaged and effective. Bridge that gap with iiT IT’s CIO as a Service, which combines a potent mix of business acumen with technical expertise for any sized organization.          `} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="eleven" />

        <TwoColumnSection imgSrc={twelve} lineOne={'CIO as a '} lineTwo={'service (vCIO)'} para={`As the quantity and complexity of cyber-attacks grow daily, cybersecurity is becoming increasingly vital. Most businesses cannot afford a specialized Cybersecurity Team, provide training, or manage the necessary technologies to provide compliance and protection. The more sophisticated the threats are, the more complicated the response and expertise of the responders should be. `} classes={'lg:flex-reverse lg:flex-row'} name="twelve" />

        <TwoColumnSection imgSrc={thirteen} lineOne={'Cloud '} lineTwo={'Consulting'} para={`Cloud consulting helps companies recognize and reap the benefits of cloud computing and solve issues with their existing cloud solutions. Itransition’s cloud consultants can assist you with migration to the cloud platform of your choice as well as cloud development, integration, and redesign. Our services cover reviewing and creating the cloud strategy, infrastructure assessing, cloud migration, architecture redesign, cloud-first development, cloud integration, and cloud technology selection.           `} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="thirteen" />

        <TwoColumnSection imgSrc={fourteen} lineOne={'System Integration '} lineTwo={'& Custom development'} para={`At iiT we develop advanced software products that are well-designed, coded to high standards, and also well-tested. We ensure flawless communication & provide regular updates. Our custome development services cover different technologies that provide web, mobile apps, enterprise software, SaaS applications, backend & frontend, cross-platform developments.`} classes={'lg:flex-reverse lg:flex-row'} name="fourteen" />

        <TwoColumnSection
          imgSrc={fifteen}
          lineOne={'DevOps '}
          lineTwo={'Consulting'}
          para={`At iiT, we help you to align Devs with Ops by providing services to automate end-to-end software delivery and ensure the scalability and security of infrastructures in companies of all sizes. 
By consolidating development and operations, we help businesses establish transparent and quick software delivery cycles, along with improving the quality of implemented solutions and setting up collaboration-driven, cross-functional teams.
 `}
          classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'}
          name="fifteen"
        />
      </div>
    </div>
  );
};

export default Services;
