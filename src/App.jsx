import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ChevronUp, Play } from 'lucide-react'
import mainImage from './assets/main_image.jpeg'
import whatsappIcon from './assets/whatsapp_icon.png'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [timeLeft, setTimeLeft] = useState({
    minutes: 58,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          return { minutes: 58, seconds: 30 } // Reset timer
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "O que está incluso na compra do guia?",
      answer: "Ao adquirir o guia, você terá acesso a uma área de membros exclusiva, um guia interativo com vídeos e ilustrações, um PDF com treinos personalizados, atualizações gratuitas, desafios, e muito mais."
    },
    {
      question: "Quanto tempo após a compra terei acesso ao material?",
      answer: "O acesso é imediato! Assim que a compra for aprovada, você receberá um e-mail com todas as instruções para acessar o conteúdo."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Você tem 7 dias para testar o guia. Se não ficar satisfeito, basta solicitar o reembolso e devolveremos 100% do seu dinheiro."
    },
    {
      question: "Como funciona o Reembolso?",
      answer: "O reembolso é processado em até 7 dias úteis após a solicitação, diretamente na forma de pagamento utilizada na compra."
    },
    {
      question: "Como faço para obter suporte após a compra?",
      answer: "Você pode entrar em contato conosco através do WhatsApp ou e-mail. Nossa equipe está sempre pronta para ajudar."
    },
    {
      question: "Como funciona a navegação pelo guia?",
      answer: "O guia é totalmente interativo. Você pode clicar nos exercícios para ver demonstrações em vídeo, ilustrações e instruções detalhadas."
    },
    {
      question: "O guia aborda treinos para todas as partes do corpo?",
      answer: "Sim! O guia inclui exercícios completos para todos os grupos musculares, com foco em hipertrofia e condicionamento físico."
    },
    {
      question: "Quais tipos de treinos estão disponíveis?",
      answer: "Temos treinos de hipertrofia, exercícios aeróbicos, HIIT, sprints, e programas específicos para diferentes objetivos."
    },
    {
      question: "Posso acessar as atualizações gratuitamente?",
      answer: "Sim! Todas as futuras atualizações do guia são gratuitas para quem já possui o acesso."
    },
    {
      question: "Posso acessar o conteúdo em dispositivos diferentes?",
      answer: "Sim! Você pode acessar o conteúdo em qualquer dispositivo: computador, tablet ou smartphone."
    }
  ]

  const features = [
    {
      title: "Área de Membros Exclusiva",
      description: "Um espaço dedicado para você acessar todo o conteúdo de maneira organizada e simples. Navegue facilmente entre os materiais e tenha tudo ao seu alcance."
    },
    {
      title: "Guia Interativo",
      description: "Nosso guia digital, onde ao clicar no nome de um exercício, você será levado diretamente à página dele, com ilustrações realizadas, execução correta, erros comuns e músculos funcionais."
    },
    {
      title: "Vídeos com Treinos Completos",
      description: "Tenha acesso a uma série de vídeos exclusivos com treinos específicos para hipertrofia e exercícios aeróbicos, demonstrando a forma correta de cada movimento."
    },
    {
      title: "PDF com Treinos Personalizados",
      description: "Um PDF prático com treinos estruturados e prontos para seguir, ideal para facilitar o seu progresso e manter sua rotina organizada."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      <div className="promo-banner">
        🔥 PROMOÇÃO POR TEMPO LIMITADO
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="main-title">
            GUIA DE TREINOS INTERATIVO:<br />
            COM <span className="highlight">CONTEÚDOS SEMPRE<br />
            ATUALIZADOS!</span>
          </h1>
          
          <p className="subtitle">
            Nunca mais fique em dúvida sobre a execução de um exercício. Acesse nosso guia interativo e treine com confiança.
          </p>

          {/* Video Placeholder */}
          <div className="relative mb-8">
            <div className="w-80 h-48 bg-black/50 rounded-lg flex items-center justify-center border-2 border-red-500">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Product Image */}
          <div className="mb-8">
            <img 
              src={mainImage} 
              alt="Guia de Treinos" 
              className="w-64 h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Countdown Timer */}
          <div className="countdown-timer mb-8">
            <div className="text-lg mb-2">OFERTA EXPIRA EM:</div>
            <div className="text-2xl">
              {String(timeLeft.minutes).padStart(2, '0')} Minutos {String(timeLeft.seconds).padStart(2, '0')} Segundos
            </div>
          </div>

          {/* Price Section */}
          <div className="price-section mb-8">
            <div className="old-price mb-2">de R$97,00 por</div>
            <div className="new-price">R$37,00</div>
          </div>

          {/* CTA Button */}
          <Button className="cta-button">
            Quero meu acesso
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Veja Tudo o Que Está Incluído no Seu Pacote
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8">Fitness Pro: Seu Guia Completo de Treinos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Guia Digital Interativo",
                "Vídeos Exclusivos de Treinos", 
                "PDF com Treinos Personalizados",
                "Área de Membros Exclusiva",
                "Atualizações Gratuitas",
                "Sprints e HIIT",
                "Sucos e chás Detox",
                "Desafio 7 dias",
                "Como perder gordura corporal",
                "Garantia de 7 Dias"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center p-3 bg-green-100 rounded-lg">
                  <span className="text-green-800 font-medium">✓ {benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">Garantia de 7 Dias</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Testar nosso guia é sem risco! Se dentro de 7 dias você não estiver completamente satisfeito com os resultados ou com o conteúdo, devolvemos seu dinheiro, sem complicações. Nós tanto acreditamos no valor que entregamos, que oferecemos essa garantia para você comprar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container mx-auto px-4">
          <h2 className="faq-title">Perguntas Frequentes</h2>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
      </div>
    </div>
  )
}

export default App

