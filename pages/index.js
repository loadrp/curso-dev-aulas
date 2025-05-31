function Home() {
  return (
    <div style={{
      fontFamily: '"Inter", "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
      textAlign: 'center',
      padding: '0',
      margin: '0',
      backgroundColor: '#ffffff',
      color: '#333333',
      lineHeight: '1.6',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header style={{
        padding: '80px 20px 60px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderBottom: '1px solid #e9ecef',
        boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: '#1a1a2e',
          marginBottom: '20px',
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          ZapCliente: Otimize Seus Anúncios e Automatize Seu Atendimento
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: '#495057',
          maxWidth: '800px',
          margin: '0 auto',
          fontWeight: '400'
        }}>
          Potencialize seus resultados com Google Ads, Meta Ads e automatizações de WhatsApp.
        </p>
      </header>

      <main style={{
        flex: '1',
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <section style={{
          margin: '80px auto',
          padding: '40px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            color: '#0062cc',
            marginBottom: '30px',
            fontWeight: '600',
            position: 'relative',
            display: 'inline-block'
          }}>
            Por que escolher a ZapCliente?
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              backgroundColor: '#0062cc',
              borderRadius: '2px'
            }}></span>
          </h2>
          <p style={{
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto 20px auto',
            fontSize: '1.15rem',
            color: '#495057'
          }}>
            Na ZapCliente, otimizamos suas campanhas no Google Ads e Meta Ads para alcançar seu público ideal e maximizar o ROI. Além disso, implementamos automatizações de WhatsApp para agilizar seu atendimento e nutrição de leads, transformando cliques em clientes fiéis.
          </p>
        </section>

        <section style={{ 
          margin: '80px auto',
          padding: '60px 40px',
          backgroundColor: '#0062cc',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,98,204,0.25)'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            marginBottom: '25px',
            fontWeight: '600',
            color: 'white'
          }}>
            Pronto para Vender Mais?
          </h2>
          <p style={{
            marginBottom: '35px',
            fontSize: '1.15rem',
            maxWidth: '800px',
            margin: '0 auto 40px auto',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Descubra como a ZapCliente pode impulsionar seu negócio com estratégias personalizadas.
          </p>
          <a
            href="mailto:lucas.rodrigues.prado120@gmail.com?subject=Interesse nos Serviços ZapCliente"
            style={{
              backgroundColor: 'white',
              color: '#0062cc',
              padding: '16px 36px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}
          >
            Fale Conosco
          </a>
        </section>
      </main>

      <footer style={{
        padding: '40px 20px',
        backgroundColor: '#1a1a2e',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>
            &copy; {new Date().getFullYear()} ZapCliente - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
