import React, { useContext } from 'react';
import { Users, Award, BookOpen, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SubscribeNewsletter from '../components/SubscribeNewsletter';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Sample team 
  const teamMembers = [
  {
    name: language === 'en' ? 'Mr. Ahmed Emara' : 'السيد احمد عمارة',
    role: language === 'en' ? 'Principal' : 'المدير',
    image: 'https://drive.google.com/thumbnail?id=1L6Doy5RXQFeNFbzOxtlQe2HVEdA1RLQ T',
    bio: language === 'en'
      ? 'Mr. Ahmed Emara holds a Doctorate in Educational Leadership and has guided the school to excellence for over 20 years.'
      : 'يمتلك السيد احمد عمارة دكتوراه في القيادة التربوية وقد قاد المدرسة نحو التميز لأكثر من 20 عامًا.',
    description: language === 'en'
      ? 'Mr. Ahmed Emara provides strategic leadership, oversees academic programs, and ensures the overall success and well‑being of students and staff.'
      : 'يقدّم السيد احمد عمارة القيادة الاستراتيجية، ويشرف على البرامج الأكاديمية، ويضمن نجاح ورفاهية الطلاب والمعلمين.'
  },
  {
    name: language === 'en' ? 'Ms. Eman' : 'السيدة ايمان',
    role: language === 'en' ? 'Vice Principal' : 'وكيلة المدرسة',
    image: 'https://drive.google.com/thumbnail?id=1XpM8s6DdtZ4LBPKRlV52IjSWOYSopEv z',
    bio: language === 'en'
      ? 'Ms. Eman holds an MSc in Biochemistry and has spearheaded numerous student research projects, fostering inquiry and innovation.'
      : 'تحمل السيدة ايمان ماجستير في الكيمياء الحيوية وقادت العديد من مشاريع البحث الطلابي، معززة روح الاستقصاء والابتكار.',
    description: language === 'en'
      ? 'Ms. Eman supports school administration, manages day‑to‑day operations, and coordinates student affairs and discipline.'
      : 'تدعم السيدة ايمان إدارة المدرسة، وتدير العمليات اليومية، وتنسّق شؤون وانضباط الطلاب.'
  },
  {
    name: language === 'en' ? 'Mr. Mohamed Abdeltawwab' : 'السيد محمد عبد التواب',
    role: language === 'en' ? 'Social Specialist' : 'الاخصائى الاجتماعى',
    image: 'https://images.unsplash.com/photo--5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    bio: language === 'en'
      ? 'Mr. Mohamed Abdeltawwab holds a degree in Social Work and has over 10 years of experience counseling and advocating for student well‑being.'
      : 'يمتلك السيد محمد عبد التواب درجة في العمل الاجتماعي ولديه أكثر من 10 سنوات خبرة في الإرشاد والدفاع عن رفاهية الطلاب.',
    description: language === 'en'
      ? 'Mr. Mohamed Abdeltawwab counsels students, develops welfare programs, and liaises with families to support social and emotional development.'
      : 'يقدّم السيد محمد عبد التواب الإرشاد للطلاب، ويطور برامج الرعاية، ويتواصل مع الأسر لدعم التطور الاجتماعي والعاطفي.'
  },
  {
    name: language === 'en' ? 'Ms. Hala Hassan' : 'السيدة هالة حسن',
    role: language === 'en' ? 'Head of Physics Department' : 'رئيسة قسم الفيزياء',
    image: 'https://images.unsplash.com/photo--15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
    bio: language === 'en'
      ? 'Ms. Hala Hassan is a trained mechanical engineer with 15 years of industry experience in engineering design and robotics integration.'
      : 'تمتلك السيدة هالة حسن خلفية في الهندسة الميكانيكية وخبرة صناعية تمتد 15 عامًا في التصميم الهندسي وتكامل الروبوتات.',
    description: language === 'en'
      ? 'Ms. Hala Hassan designs curriculum, leads laboratory work, and mentors teachers in delivering hands‑on science education.'
      : 'تصمم السيدة هالة حسن المناهج، وتقود الأعمال المخبرية، وتوجّه المعلمين في تقديم تعليم علمي تطبيقي.'
  }
];


  // Sample achievements data
  const achievements = [
    {
      title: language === 'en' ? 'National Science Olympiad' : 'أولمبياد العلوم الوطني',
      year: '2024',
      description: language === 'en'
        ? 'First place in the National Science Olympiad, with three gold medals in physics, chemistry, and biology.'
        : 'المركز الأول في أولمبياد العلوم الوطني، مع ثلاث ميداليات ذهبية في الفيزياء والكيمياء وعلم الأحياء.'
    },
    {
      title: language === 'en' ? 'International Mathematics Competition' : 'مسابقة الرياضيات الدولية',
      year: '2023',
      description: language === 'en'
        ? 'Second place in the International Mathematics Competition, with two students qualifying for the International Mathematical Olympiad.'
        : 'المركز الثاني في مسابقة الرياضيات الدولية، مع تأهل طالبين لأولمبياد الرياضيات الدولية.'
    },
    {
      title: language === 'en' ? 'FIRST Robotics Competition' : 'مسابقة FIRST للروبوتات',
      year: '2023',
      description: language === 'en'
        ? 'Regional champions in the FIRST Robotics Competition, advancing to the world championship in Houston, Texas.'
        : 'أبطال المنطقة في مسابقة FIRST للروبوتات، والتقدم إلى بطولة العالم في هيوستن، تكساس.'
    },
    {
      title: language === 'en' ? 'Google Science Fair' : 'معرض Google للعلوم',
      year: '2022',
      description: language === 'en'
        ? 'Global finalist in the Google Science Fair, with an innovative project on renewable energy solutions.'
        : 'متأهل للنهائيات العالمية في معرض Google للعلوم، بمشروع مبتكر حول حلول الطاقة المتجددة.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="STEM Education" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.aboutTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {language === 'en' 
              ? 'Empowering students through excellence in STEM education since 2017.'
              : 'تمكين الطلاب من خلال التميز في تعليم العلوم والتكنولوجيا والهندسة والرياضيات منذ عام 2017.'
            }
          </p>
        </div>
      </div>
      
      {/* Our History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.ourHistory} centered={false} />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                {language === 'en' 
                  ? 'STEM Gharbiya was established in 2015 as part of Egypt\'s initiative to promote STEM education across the country. The school was founded with a vision to nurture the next generation of scientists, technologists, engineers, and mathematicians who would contribute to Egypt\'s development and innovation ecosystem.'
                  : 'تأسست مدرسة STEM الغربية في عام 2015 كجزء من مبادرة مصر لتعزيز تعليم العلوم والتكنولوجيا والهندسة والرياضيات في جميع أنحاء البلاد. تأسست المدرسة برؤية لرعاية الجيل القادم من العلماء والتقنيين والمهندسين والرياضيين الذين سيساهمون في تطوير مصر ونظام الابتكار فيها.'
                }
              </p>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Over the years, STEM Gharbiya has grown to become one of the leading STEM schools in Egypt, known for its innovative teaching methods, state-of-the-art facilities, and the exceptional achievements of its students in national and international competitions.'
                  : 'على مر السنين، نمت STEM الغربية لتصبح واحدة من مدارس STEM الرائدة في مصر، والمعروفة بأساليب التدريس المبتكرة، والمرافق المتطورة، والإنجازات الاستثنائية لطلابها في المسابقات الوطنية والدولية.'
                }
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="STEM Gharbiya History" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision, Mission, and Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.ourVision}</h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'To be a leading institution in STEM education that prepares students to become innovative leaders and problem solvers who contribute to Egypt\'s sustainable development and global competitiveness.'
                  : 'أن نكون مؤسسة رائدة في تعليم العلوم والتكنولوجيا والهندسة والرياضيات تعد الطلاب ليصبحوا قادة مبتكرين وحلالي مشكلات يساهمون في التنمية المستدامة لمصر وقدرتها التنافسية العالمية.'
                }
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-block mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.ourMission}</h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'To provide a rigorous, integrated STEM education through project-based learning that fosters critical thinking, creativity, collaboration, and communication skills, enabling students to excel in higher education and future careers.'
                  : 'توفير تعليم صارم ومتكامل في العلوم والتكنولوجيا والهندسة والرياضيات من خلال التعلم القائم على المشاريع الذي يعزز مهارات التفكير النقدي والإبداع والتعاون والتواصل، مما يمكن الطلاب من التفوق في التعليم العالي والمهن المستقبلية.'
                }
              </p>  
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-block mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.ourValues}</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• {language === 'en' ? 'Excellence' : 'التميز'}</li>
                <li>• {language === 'en' ? 'Innovation' : 'الابتكار'}</li>
                <li>• {language === 'en' ? 'Integrity' : 'النزاهة'}</li>
                <li>• {language === 'en' ? 'Collaboration' : 'التعاون'}</li>
                <li>• {language === 'en' ? 'Inclusivity' : 'الشمولية'}</li>
                <li>• {language === 'en' ? 'Sustainability' : 'الاستدامة'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        
      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.meetOurTeam} 
            subtitle={language === 'en'
              ? 'Our dedicated faculty and staff are committed to providing the best education for our students'
              : 'هيئة التدريس والموظفون المتفانون لدينا ملتزمون بتوفير أفضل تعليم لطلابنا'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.achievements} 
            subtitle={language === 'en'
              ? 'Recognizing the outstanding accomplishments of our students and school'
              : 'الاعتراف بالإنجازات المتميزة لطلابنا ومدرستنا'
            }
            centered={true}
          />
          
          <div className="mt-12 space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-900">{achievement.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
};

export default About;



