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
import { useAppContext } from '@/context/AppContext';

const Services = () => {
  const { arabicLanguage } = useAppContext();
  return (
    <div className="container xl:max-w-[1268px] px-4 mx-auto text-white">
      <div id="services" name="services">
        <h2 data-aos="fade-up" className="font-GilroyBlack font-black text-white text-center text-xl lg:text-[66px] lg:leading-[86px] capitalize mb-2.5">
          {arabicLanguage ? 'خدماتنا' : 'Our Services'}
        </h2>
        <p data-aos="fade-up" className="text-xs lg:text-lg text-white max-w-[978px] mx-auto text-center">
          {arabicLanguage ? 'تغطي خدماتنا جميع جوانب التحول الرقمي وتكنولوجيا المعلومات، بدءًا من استراتيجية التحول الرقمي واستراتيجية البيانات وبنية المؤسسة إلى الحوكمة والتدقيق والتنفيذ ومراقبة المشاريع والعمليات والتغييرات الرقمية.' : 'Our services cover all the digital transformation and information technology aspects, starting from the digital transformation strategy, data strategy, and enterprise architecture to governance, auditing and execution and monitoring of the digital projects, processes and changes.'}
        </p>
      </div>
      <div className="flex flex-col gap-[120px] lg:gap-[180px] mt-[130px] pb-[180px]">
        <TwoColumnSection
          imgSrc={one}
          lineOne={arabicLanguage ? ' التحول الرقمي' : 'Digital Transformation '}
          lineTwo={arabicLanguage ? 'استراتيجية' : 'Strategy'}
          lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'}
          lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'}
          para={
            arabicLanguage
              ? `لتحقيق الفوز في العصر الرقمي، تحتاج إلى طموح جريء وتنفيذ لا تشوبه شائبة. سوف نساعد في كليهما. تعمل فرقنا متعددة التخصصات من الخبراء الفنيين جنبًا إلى جنب معك لتصميم وبناء وتوسيع نطاق الأعمال الرقمية التحويلية حقًا، من خلال اعتماد التقنيات المناسبة التي من شأنها تمكين عملك من تحسين تجربة العملاء، والحصول على كفاءة أعلى في العمليات، وزيادة المرونة، وتقليل التكلفة واكتساب مزايا تنافسية وتحسين أداء الموظفين والحصول على رؤية أفضل وتحسين التعاون.`
              : `To win in the digital era you need a bold ambition and flawless execution. We would help with both. Our multidisciplinary teams of technical experts work side-by-side with you to design, build, and scale truly transformative digital businesses, by adopting the suitable technologies that would enable your business to improve customer experience, have higher process efficiency, increase agility, reduce the cost, gain competitive advantages, improve employee performance, have better visibility and improve collaboration.
`
          }
          classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'}
          name="one"
        />

        <TwoColumnSection lineOneColor="text-white" lineTwoColor="text-yellow" imgSrc={two} lineOne={arabicLanguage ? 'البيانات والتصور' : 'Data strategy, data '} lineTwo={arabicLanguage ? 'استراتيجية البيانات وتحليل ' : 'analysis and visualization'} para={arabicLanguage ? `استراتيجية البيانات هي خطة طويلة المدى تحدد التكنولوجيا والعمليات والأشخاص والقواعد المطلوبة لإدارة أصول المعلومات الخاصة بمؤسستك. تقوم مؤسستك بجمع كميات كبيرة من البيانات الأولية. ومع ذلك، فأنت بحاجة إلى خطة مدروسة لإدارة البيانات وتحليلها إذا كنت تريد استخدام هذه المعلومات لاتخاذ قرارات مستنيرة.` : `A data strategy is a long-term plan that defines the technology, processes, people, and rules required to manage your organization's information assets. Your organization collect large amounts of raw data. However, you need a well-thought-out data management and analysis plan if you want to use this information to make informed decisions.`} classes={'lg:flex-reverse lg:flex-row'} name="two" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={three} lineOne={arabicLanguage ? 'التجارية' : 'Business processes '} lineTwo={arabicLanguage ? 'أتمتة العمليات ' : 'automation'} para={arabicLanguage ? `من خلال الأتمتة، سيصبح عملك أكثر كفاءة وفعالية من حيث التكلفة. سنساعدك على توفير الوعي بالأتمتة، وتحديد المهام المتكررة التي يمكن أتمتتها وتنفيذ الأتمتة للعمليات المرشحة. سيختار خبراؤنا التكنولوجيا الأكثر ملاءمة لكل فرصة للأتمتة، سواء كانت تقنية RPA أو التكامل أو ذكاء الأعمال أو أي تقنية أخرى تناسب احتياجات عملك وطبيعة العملية.` : `By automation, your business would become more efficient and cost effective. We would help you to provide automation awareness, identify the repetitive tasks that can be automated and implement the automation for the nominated processes. Our experts will select the most suitable technology for each automation opportunity, be it RPA, integration, business intelligence or any other technology that most fit your business needs and the nature of the process.`} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="three" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={four} lineOne={arabicLanguage ? 'للمؤسسات' : 'Enterprise '} lineTwo={arabicLanguage ? 'الهندسة المعمارية ' : 'Architecture'} para={arabicLanguage ? `نحن نساعدك على إنشاء بنية مؤسسية تتناسب مع احتياجاتك الحقيقية. يقدم مهندسو الأعمال والتطبيقات والبيانات والتكنولوجيا لدينا خدمات تغطي نطاقًا واسعًا. إذا كان عملك يحتاج إلى لاعب دعم يمكنه أن يكون شريكًا في المناقشة، أو إذا كان عملك يريد مساعدة في تقديم بنية المؤسسة كوظيفة، فيمكننا مساعدتك في كلا الخيارين. لقد عمل مستشارونا بمرور الوقت مع هذا الأمر لكل من المؤسسات الخاصة والعامة ويقدمون الخدمات التي تتكيف مع احتياجاتك` : `we help you establish an enterprise architecture scaled to your real needs. Our business, application, data and technology architects deliver services that span a wide spectrum. If your business needs a support player who can be a discussion partner, or if your business want an assistance in introducing enterprise architecture as a function, we could help you in both options. Our consultants have over time worked with this for both private and public organizations and deliver services that are adapted to your needs`} classes={'lg:flex-reverse lg:flex-row'} name="four" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={five} lineOne={arabicLanguage ? 'المعلومات في المؤسسات' : 'Enterprise '} lineTwo={arabicLanguage ? 'حوكمة تكنولوجيا ' : 'IT Governance'} para={arabicLanguage ? `سيساعدك خبراؤنا في جميع الصناعات في مجال إدارة تكنولوجيا المعلومات. البدء بتطبيق لوائح مختلفة تحكم حماية المعلومات السرية، والمساءلة المالية، والاحتفاظ بالبيانات، واسترداد الحوادث. لضمان تلبية شركتك للمتطلبات الداخلية والخارجية، يساعدك خبراؤنا من خلال تنفيذ برنامج رسمي لحوكمة تكنولوجيا المعلومات يوفر إطارًا لأفضل الممارسات والضوابط.` : `Our experts will help you in all industries in the area of IT governance. Starting by applying different regulations governing the protection of confidential information, financial accountability, data retention, and incident recovery. To ensure your company meets internal and external requirements, our experts help you by implementing a formal IT governance program that provides a framework of best practices and controls.`} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="five" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={six} lineOne={arabicLanguage ? ' المعلومات والتكنولوجيا' : 'IT & Technology'} lineTwo={arabicLanguage ? 'تدقيق تكنولوجيا' : 'Auditing'} para={arabicLanguage ? `تتمتع ممارسة تدقيق تكنولوجيا المعلومات لدينا بقدرات معترف بها وخبرة موضوعية تساعد العملاء في فهم مجالات مخاطر الأعمال والصناعة (الحوكمة والعمليات والعمليات وتكنولوجيا المعلومات) التي تترجم ومواءمة مكونات مخاطر تكنولوجيا المعلومات مع الأعمال، مع القدرة على تجاوز حدود الشركة. المجالات القياسية لضوابط تكنولوجيا المعلومات ولضمان توافق الأعمال مع تكنولوجيا المعلومات. نحن نستخدم المنهجيات والأطر المعروفة مثل COBIT وISO وITIL.` : `Our IT Audit practice has recognized capabilities and subject matter experience assisting clients in understanding areas of business and industry risk (governance, process, operations, and IT) that translates and aligns IT risk components to the business, with the ability to go beyond a company’s standard areas of IT controls and to ensure business-IT alignment. We are using the known methodologies and frameworks like COBIT, ISO, and ITIL.`} classes={'lg:flex-reverse lg:flex-row'} name="six" />

        <TwoColumnSection lineOneColor="text-yellow" lineTwoColor="text-white" imgSrc={seven} lineOne={arabicLanguage ? 'الكوارث (BCDR)' : 'Business continuity & '} lineTwo={arabicLanguage ? 'استمرارية الأعمال والتعافي من ' : 'Disaster recovery (BCDR)'} para={arabicLanguage ? `يمكن أن تأتي الكوارث بأشكال عديدة: انقطاع التيار الكهربائي لفترة طويلة، أو قاعدة بيانات تالفة، أو خادم مُخرب، ناهيك عن الحريق، أو العاصفة، أو اختفاء موظف مهم، أو مشكلات في سلسلة التوريد، أو الزلازل. يمكن لـ iT مساعدة مؤسستك على تطوير خطة فعالة لمواصلة العمليات التجارية في حالة وقوع كارثة. باستخدام إطار عملنا الذي تم اختباره عبر الزمن، فإننا نعمل مع الأعضاء الرئيسيين في مؤسستك لتطوير خطة قوية من شأنها أن تؤدي وظيفتها في أزمة العمل.` : `Disaster can come in many forms: an extended power outage, a corrupted database, or a vandalized server, not to mention a fire, storm, disappear of critical employee, supply chain issues, or earthquake. iiT can help your organization develop an effective plan for continuing business operations in the event of catastrophe. Using our time-tested framework, we work with key members of your organization to develop a robust plan that will perform in a business crisis.`} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="seven" />

        <TwoColumnSection
          lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'}
          lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'}
          imgSrc={eight}
          lineOne={arabicLanguage ? 'وإدارتها' : 'Risk assessment '}
          lineTwo={arabicLanguage ? 'تقييم المخاطر ' : 'and management'}
          para={
            arabicLanguage
              ? `قم بحماية عملك ضد التهديدات المحتملة من خلال خدماتنا الاستشارية. نحن خبراء في إدارة المخاطر، وهدفنا هو زيادة القيمة التي تقدمها لأصحاب المصلحة. ثق بخدماتنا الخاصة بمخاطر الأعمال لتعزيز مستقبل مشروعك ونجاحه.
              إن فهم المخاطر التي قد يواجهها عملك أمر بالغ الأهمية. بدءًا من الانكماش المالي العالمي وحتى تزايد التهديدات السيبرانية، فإننا نكتشف المخاطر مبكرًا ونتخذ الإجراءات في الوقت المناسب. وهذا هو المكان الذي يتدخل فيه المتخصصون في استشارات المخاطر لدينا لتقديم خبرة لا مثيل لها.`
              : `Safeguard your business against potential threats with our advisory services. We're experts in risk management, and our aim is to augment the value you offer to stakeholders. Trust our business risk services to fortify the future and success of your venture.
Understanding the risks your business might encounter is crucial. From global financial downturns to the surge in cyber threats, we detect risks early and take timely action. This is where our risk advisory specialists step in to provide unmatched expertise.`
          }
          classes={'lg:flex-reverse lg:flex-row'}
          name="eight"
        />

        <TwoColumnSection
          imgSrc={nine}
          lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'}
          lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'}
          lineOne={arabicLanguage ? 'الإلكتروني' : 'Cyber Security'}
          lineTwo={arabicLanguage ? 'الأمن ' : ''}
          para={
            arabicLanguage
              ? `مع توجه الشركات أكثر نحو نماذج الأعمال الرقمية، يتم إنشاء المزيد من البيانات ومشاركتها بشكل كبير بين المؤسسات والشركاء والعملاء. لقد أصبحت هذه المعلومات الرقمية بمثابة شريان الحياة للنظام البيئي للأعمال المترابطة وهي ذات قيمة متزايدة للمؤسسات - وللجهات الفاعلة الماهرة في مجال التهديد. وتعني زيادة الرقمنة أيضًا أن الشركات معرضة لنقاط ضعف رقمية جديدة، مما يجعل اتباع نهج فعال للأمن السيبراني والثقة الرقمية أكثر أهمية من أي وقت مضى.
              في iT، نساعد عملائنا على التحول من حماة القيمة إلى منشئي القيمة من خلال بناء الثقة وتعزيز المرونة وتمكين الأعمال. نحن هنا لمساعدتك على تحويل مؤسستك ودفع النمو، مع الحفاظ على المرونة والاستعداد لما هو غير متوقع`
              : `As companies pivot more toward digital business models, exponentially more data is generated and shared among organizations, partners and customers. This digital information has become the lifeblood of the interconnected business ecosystem and is increasingly valuable to organizations—and to skilled threat actors. Increasing digitization also means companies are exposed to new digital vulnerabilities, making an effective approach to cybersecurity and digital trust more important than ever.
At iiT, we help our clients transform from value protectors to value creators by building trust, promoting resilience and enabling the business. We are here to help you transform your organization and drive growth, while staying resilient and preparing for the unexpected
`
          }
          classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'}
          name="nine"
        />

        <TwoColumnSection lineOneColor="text-yellow" lineTwoColor="text-white" imgSrc={ten} lineOne={arabicLanguage ? 'تنفيذ ودعم وCDP والأعمال تطبيقات  ' : 'ERP, CRM, CDP '} lineTwo={arabicLanguage ? 'ERP وCRM ' : '& Business applications implementation & Support'} para={arabicLanguage ? `تعد المنصات الرقمية الأساسية بمثابة مفاتيح لرحلة التحول الرقمي الناجحة في أي مؤسسة. إن تحديد الاحتياجات ومقارنة الخيارات المتاحة في السوق وإدارة وتنفيذ التنفيذ الناجح ليست رحلة سهلة.` : `The foundational digital platforms are keys for a successful digital transformation journey in any organization. Identifying the needs, comparing the options in the market, managing and executing a successful implementation is not an easy journey.`} classes={'lg:flex-reverse lg:flex-row'} name="ten" />

        <TwoColumnSection lineOneColor="text-yellow" lineTwoColor="text-white" imgSrc={eleven} lineOne={arabicLanguage ? 'CIO كخدمة' : 'CIO as a '} lineTwo={arabicLanguage ? ' (vCIO)' : 'service (vCIO)'} para={arabicLanguage ? `هل لاحظت يومًا وجود انفصال بين متطلبات عملك وما تقدمه تكنولوجيا المعلومات فعليًا؟ حتى أدنى اختلال يمكن أن يؤثر بشكل كبير على قدرتك على خدمة العملاء والحفاظ على مشاركة موظفيك وفعاليتهم. سد هذه الفجوة مع مدير تكنولوجيا المعلومات كخدمة في شركة iT IT، والذي يجمع بين مزيج قوي من الفطنة التجارية والخبرة الفنية لأي مؤسسة بأي حجم.` : `Ever noticed a disconnect between your business requirements and what IT actually delivers? Even the slightest misalignment can significantly impact your ability to service customers and keep your staff engaged and effective. Bridge that gap with iiT IT’s CIO as a Service, which combines a potent mix of business acumen with technical expertise for any sized organization.          `} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="eleven" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={twelve} lineOne={arabicLanguage ? ' CISO ' : 'CIO as a '} lineTwo={arabicLanguage ? 'كخدمة' : 'service (vCIO)'} para={arabicLanguage ? `مع تزايد كمية الهجمات السيبرانية وتعقيدها يوميًا، أصبح الأمن السيبراني أمرًا حيويًا بشكل متزايد. لا تستطيع معظم الشركات تحمل تكلفة فريق متخصص للأمن السيبراني، أو توفير التدريب، أو إدارة التقنيات اللازمة لتوفير الامتثال والحماية. كلما كانت التهديدات أكثر تعقيدًا، كلما كانت الاستجابة وخبرة المستجيبين أكثر تعقيدًا.` : `As the quantity and complexity of cyber-attacks grow daily, cybersecurity is becoming increasingly vital. Most businesses cannot afford a specialized Cybersecurity Team, provide training, or manage the necessary technologies to provide compliance and protection. The more sophisticated the threats are, the more complicated the response and expertise of the responders should be. `} classes={'lg:flex-reverse lg:flex-row'} name="twelve" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={thirteen} lineOne={arabicLanguage ? 'السحابية' : 'Cloud '} lineTwo={arabicLanguage ? 'الاستشارات ' : 'Consulting'} para={arabicLanguage ? `تساعد الاستشارات السحابية الشركات على التعرف على فوائد الحوسبة السحابية وجني فوائدها وحل المشكلات باستخدام الحلول السحابية الحالية. يمكن لمستشاري Itransition السحابي مساعدتك في الانتقال إلى النظام الأساسي السحابي الذي تختاره بالإضافة إلى تطوير السحابة والتكامل وإعادة التصميم. تغطي خدماتنا مراجعة وإنشاء إستراتيجية السحابة، وتقييم البنية التحتية، والترحيل السحابي، وإعادة تصميم البنية، وتطوير السحابة أولاً، والتكامل السحابي، واختيار التكنولوجيا السحابية.` : `Cloud consulting helps companies recognize and reap the benefits of cloud computing and solve issues with their existing cloud solutions. Itransition’s cloud consultants can assist you with migration to the cloud platform of your choice as well as cloud development, integration, and redesign. Our services cover reviewing and creating the cloud strategy, infrastructure assessing, cloud migration, architecture redesign, cloud-first development, cloud integration, and cloud technology selection.           `} classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'} name="thirteen" />

        <TwoColumnSection lineOneColor={arabicLanguage ? 'text-white' : 'text-yellow'} lineTwoColor={arabicLanguage ? 'text-yellow' : 'text-white'} imgSrc={fourteen} lineOne={arabicLanguage ? 'النظام' : 'System Integration '} lineTwo={arabicLanguage ? 'تكامل  والتطوير المخصص' : '& Custom development'} para={arabicLanguage ? `في iT نقوم بتطوير منتجات برمجية متقدمة مصممة جيدًا، ومشفرة وفقًا لمعايير عالية، كما تم اختبارها جيدًا. نحن نضمن التواصل الذي لا تشوبه شائبة وتقديم تحديثات منتظمة. تغطي خدمات تطوير العملاء لدينا تقنيات مختلفة توفر الويب وتطبيقات الهاتف المحمول وبرامج المؤسسات وتطبيقات SaaS والواجهة الخلفية والواجهة الأمامية والتطورات عبر الأنظمة الأساسية.` : `At iiT we develop advanced software products that are well-designed, coded to high standards, and also well-tested. We ensure flawless communication & provide regular updates. Our custome development services cover different technologies that provide web, mobile apps, enterprise software, SaaS applications, backend & frontend, cross-platform developments.`} classes={'lg:flex-reverse lg:flex-row'} name="fourteen" />

        <TwoColumnSection
          lineOneColor="text-yellow"
          lineTwoColor="text-white"
          imgSrc={fifteen}
          lineOne={arabicLanguage ? 'تطوير العمليات' : 'DevOps '}
          lineTwo={arabicLanguage ? 'استشارات ' : 'Consulting'}
          para={
            arabicLanguage
              ? `في iT، نساعدك على مواءمة Devs مع Ops من خلال توفير خدمات لأتمتة تسليم البرامج الشاملة وضمان قابلية التوسع وأمان البنى التحتية في الشركات من جميع الأحجام.
              من خلال دمج التطوير والعمليات، نساعد الشركات على إنشاء دورات تسليم برمجيات شفافة وسريعة، إلى جانب تحسين جودة الحلول المنفذة وإنشاء فرق متعددة الوظائف قائمة على التعاون.`
              : `At iiT, we help you to align Devs with Ops by providing services to automate end-to-end software delivery and ensure the scalability and security of infrastructures in companies of all sizes. 
By consolidating development and operations, we help businesses establish transparent and quick software delivery cycles, along with improving the quality of implemented solutions and setting up collaboration-driven, cross-functional teams.
 `
          }
          classes={'lg:flex-reverse lg:flex-row lg:flex-row-reverse'}
          name="fifteen"
        />
      </div>
    </div>
  );
};

export default Services;
