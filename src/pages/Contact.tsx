import React, { useContext } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import SubscribeNewsletter from '../components/SubscribeNewsletter';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const contactInfo = [
    {
      icon: MapPin,
      title: t.location,
      content: t.address,
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: t.phone,
      content: '+20 123 456 7890',
      link: 'tel:+201234567890'
    },
    {
      icon: Mail,
      title: t.emailUs,
      content: 'info@stemgharbiya.edu.eg',
      link: 'mailto:info@stemgharbiya.edu.eg'
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Office Hours' : 'ساعات العمل',
      content: language === 'en' ? 'Sunday - Thursday: 8:00 AM - 4:00 PM' : 'الأحد - الخميس: 8:00 صباحًا - 4:00 مساءً',
      link: null
    }
  ];

  const departments = [
    {
      name: language === 'en' ? 'Admissions Office' : 'مكتب القبول',
      email: 'admissions@stemgharbiya.edu.eg',
      phone: '+20 123 456 7891',
      description: language === 'en' 
        ? 'For all admission-related inquiries and application support'
        : 'لجميع الاستفسارات المتعلقة بالقبول ودعم التطبيقات'
    },
    {
      name: language === 'en' ? 'Academic Affairs' : 'الشؤون الأكاديمية',
      email: 'academic@stemgharbiya.edu.eg',
      phone: '+20 123 456 7892',
      description: language === 'en'
        ? 'For academic programs, curriculum, and student academic support'
        : 'للبرامج الأكاديمية والمناهج والدعم الأكاديمي للطلاب'
    },
    {
      name: language === 'en' ? 'Student Services' : 'خدمات الطلاب',
      email: 'students@stemgharbiya.edu.eg',
      phone: '+20 123 456 7893',
      description: language === 'en'
        ? 'For student life, activities, and general student support'
        : 'لحياة الطلاب والأنشطة والدعم العام للطلاب'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contactTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {language === 'en' 
              ? 'We are here to answer any questions you may have. Reach out to us and we will respond as soon as we can.'
              : 'نحن هنا للإجابة على أي أسئلة قد تكون لديك. تواصل معنا وسنرد عليك في أقرب وقت ممكن.'
            }
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.getInTouch} 
            subtitle={language === 'en'
              ? 'Multiple ways to reach us for different needs'
              : 'طرق متعددة للوصول إلينا لاحتياجات مختلفة'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-block mb-4">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
              </h2>
              <p className="text-gray-600 mb-8">
                {language === 'en'
                  ? 'Fill out the form below and we will get back to you as soon as possible.'
                  : 'املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.'
                }
              </p>
              <ContactForm />
            </div>
            
            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Visit Our Campus' : 'زر حرمنا المدرسي'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'en'
                  ? 'We welcome visitors to our campus. Schedule a tour to see our facilities and meet our faculty.'
                  : 'نرحب بالزوار في حرمنا المدرسي. حدد موعدًا لجولة لرؤية مرافقنا ومقابلة أعضاء هيئة التدريس لدينا.'
                }
              </p>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">
                    {language === 'en' ? 'Interactive Map' : 'خريطة تفاعلية'}
                  </p>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? 'Click to view in Google Maps' : 'انقر للعرض في خرائط Google'}
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'en' ? 'Campus Tours' : 'جولات الحرم المدرسي'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en'
                    ? 'Schedule a guided tour of our facilities to see our laboratories, classrooms, and meet our faculty.'
                    : 'حدد موعدًا لجولة مرشدة في مرافقنا لرؤية مختبراتنا وفصولنا الدراسية ومقابلة أعضاء هيئة التدريس لدينا.'
                  }
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  {language === 'en' ? 'Schedule a Tour' : 'حدد موعد جولة'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={language === 'en' ? 'Department Contacts' : 'جهات الاتصال بالأقسام'} 
            subtitle={language === 'en'
              ? 'Reach out to specific departments for specialized assistance'
              : 'تواصل مع أقسام محددة للحصول على مساعدة متخصصة'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'} 
            subtitle={language === 'en'
              ? 'Quick answers to common questions'
              : 'إجابات سريعة على الأسئلة الشائعة'
            }
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'What are your admission requirements?' : 'ما هي متطلبات القبول؟'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Students must have a minimum of 95% in their preparatory school final exams with strong performance in mathematics and science subjects.'
                    : 'يجب أن يحصل الطلاب على الحد الأدنى 95% في امتحانات الشهادة الإعدادية النهائية مع أداء قوي في مواد الرياضيات والعلوم.'
                  }
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'When does the application period open?' : 'متى تفتح فترة التقديم؟'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Applications typically open in March and close in April. Please check our admissions page for exact dates.'
                    : 'عادة ما تفتح التطبيقات في مارس وتغلق في أبريل. يرجى مراجعة صفحة القبول للحصول على التواريخ الدقيقة.'
                  }
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Do you offer boarding facilities?' : 'هل تقدمون مرافق إقامة؟'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Yes, we provide boarding facilities for students who live far from the school. Our dormitories are well-equipped with study areas and recreational facilities.'
                    : 'نعم، نوفر مرافق إقامة للطلاب الذين يعيشون بعيدًا عن المدرسة. مساكننا مجهزة جيدًا بمناطق دراسة ومرافق ترفيهية.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media and Follow Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'Stay Connected' : 'ابق على تواصل'}
            </h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Follow us on social media for the latest updates, events, and achievements from STEM Gharbiya.'
                : 'تابعنا على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات والفعاليات والإنجازات من STEM الغربية.'
              }
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
};

export default Contact;
