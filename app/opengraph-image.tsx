import { ImageResponse } from 'next/og'

export const alt = 'CMS School, a CBSE-affiliated senior secondary school in Nigdi, Pune'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '70px 82px',
          color: '#f8f5ec',
          background: 'linear-gradient(135deg, #10233a 0%, #1b3852 58%, #0c1a2b 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 58,
              height: 58,
              border: '2px solid #d7b76b',
              borderRadius: 16,
              color: '#e4c77c',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            CMS
          </div>
          <span style={{ color: '#f8f5ec', fontSize: 22, letterSpacing: 4 }}>CMS SCHOOL</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 900 }}>
          <span style={{ color: '#e4c77c', fontSize: 18, letterSpacing: 3 }}>
            CBSE AFFILIATED · SENIOR SECONDARY
          </span>
          <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>
            CBSE School in Nigdi, Pune
          </span>
          <span style={{ color: '#e4c77c', fontSize: 30 }}>Pimpri-Chinchwad (PCMC) · Maharashtra, India</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d8e0e5', fontSize: 18 }}>
          <span>Empowering young minds. Building bright futures.</span>
          <span>Primary · Secondary · Senior Secondary</span>
        </div>
      </div>
    ),
    size,
  )
}
