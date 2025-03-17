import { FileText, Download } from 'lucide-react';
import aiBackground from '../assets/ai.jpg';

const Publications = () => {
  const publication = {
    title: 'Empowering Sustainable Agriculture: A CNN-Based Plant Disease Detection System with Interactive AI Guidance',
    authors: ['Mr.Rohan V. Kulkarni', 'Mr. Vipul H. Kondekar', 'Dr. Asha V.Thalange','Dr.Anup S. Vibhute'],
    abstract: `This research introduces an innovative approach to plant disease detection 
    using Convolutional Neural Networks (CNN) integrated with an interactive AI guidance system. 
    Our system achieves 95% accuracy in identifying various plant diseases while providing 
    real-time feedback and treatment recommendations to farmers. The solution demonstrates 
    significant potential in advancing sustainable agriculture practices through early 
    disease detection and targeted intervention strategies.`, 
    downloadUrl: 'https://drive.google.com/file/d/1SQyZ1l6pi-ERnfPizezqgm5uipN_h6KQ/view?usp=sharing',
  };

  return (
    <section 
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${aiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications
          </h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Publication Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="p-8">
            {/* Paper Icon and Title */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {publication.title}
                </h2>
                <p className="mt-2 text-lg text-gray-700">
                  {publication.authors.join(' • ')}
                </p>
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Abstract
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {publication.abstract}
              </p>
            </div>

            {/* Download Button */}
            <div>
              <a
                href={publication.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold 
                         hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 
                         active:translate-y-0 hover:scale-105 active:scale-100 shadow-md hover:shadow-lg"
              >
                <Download className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Read Full Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications; 