import React from 'react'
import { ResumeData } from '../types/resume'

interface MinimalResumeTemplateProps {
  data: ResumeData
}

export const MinimalResumeTemplate: React.FC<MinimalResumeTemplateProps> = ({ data }) => {
  return (
    <div 
      className="resume-template minimal-template"
      style={{
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        padding: '22mm 18mm',
        fontFamily: 'Inter, HarmonyOS Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        lineHeight: '1.6',
        color: '#1e293b',
        backgroundColor: '#ffffff'
      }}
    >
      {/* 头部信息 - 极简设计 */}
      <div style={{ marginBottom: '24px' }}>
        <h1 
          style={{
            fontSize: '36px',
            fontWeight: '800',
            margin: '0 0 4px 0',
            color: '#0f172a',
            letterSpacing: '-1px'
          }}
        >
          {data.contact.name}
        </h1>
        <div style={{ 
          fontSize: '12px', 
          color: '#64748b',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <span>{data.contact.phone}</span>
          <span>•</span>
          <span>{data.contact.email}</span>
          <span>•</span>
          <span>{data.contact.location}</span>
          {data.contact.website && (
            <>
              <span>•</span>
              <span>{data.contact.website}</span>
            </>
          )}
        </div>
      </div>

      {/* 个人总结 */}
      <section style={{ marginBottom: '20px' }}>
        <h2 
          style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '4px'
          }}
        >
          个人总结
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#334155', 
          textAlign: 'justify',
          lineHeight: '1.8'
        }}>
          {data.summary}
        </p>
      </section>

      {/* 主要内容 - 单栏布局 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        {/* 工作经历 */}
        <section style={{ marginBottom: '20px' }}>
          <h2 
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px'
            }}
          >
            工作经历
          </h2>
          {data.workExperience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline', 
                marginBottom: '4px'
              }}>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  margin: 0,
                  color: '#0f172a'
                }}>
                  {exp.company}
                </h3>
                <span style={{ 
                  fontSize: '11px', 
                  color: '#64748b',
                  backgroundColor: '#f8fafc',
                  padding: '1px 6px',
                  borderRadius: '8px'
                }}>
                  {exp.startDate} - {exp.endDate || '至今'}
                </span>
              </div>
              <div style={{ 
                fontSize: '13px', 
                color: '#334155', 
                marginBottom: '6px', 
                fontWeight: '600'
              }}>
                {exp.position}
              </div>
              <p style={{ 
                fontSize: '13px', 
                color: '#334155', 
                marginBottom: '8px', 
                lineHeight: '1.6'
              }}>
                {exp.description}
              </p>
              {exp.achievements.length > 0 && (
                <ul style={{ 
                  fontSize: '12px', 
                  color: '#334155', 
                  margin: 0, 
                  paddingLeft: '14px',
                  lineHeight: '1.5'
                }}>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} style={{ marginBottom: '2px' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* 项目经验 */}
        <section style={{ marginBottom: '20px' }}>
          <h2 
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px'
            }}
          >
            项目经验
          </h2>
          {data.projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '16px', border: '1px solid #f1f5f9', borderRadius: '8px', padding: '12px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline', 
                marginBottom: '4px'
              }}>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  margin: 0,
                  color: '#0f172a'
                }}>
                  {project.name}
                </h3>
                <span style={{ 
                  fontSize: '11px', 
                  color: '#64748b',
                  backgroundColor: '#f8fafc',
                  padding: '1px 6px',
                  borderRadius: '8px'
                }}>
                  {project.startDate} - {project.endDate || '至今'}
                </span>
              </div>
              <div style={{ 
                fontSize: '13px', 
                color: '#334155', 
                marginBottom: '6px', 
                fontWeight: '600'
              }}>
                {project.role}
              </div>
              <p style={{ 
                fontSize: '13px', 
                color: '#334155', 
                marginBottom: '8px', 
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              <div style={{ 
                fontSize: '11px', 
                color: '#64748b', 
                marginBottom: '6px'
              }}>
                <strong>技术栈:</strong> {project.technologies.join(' • ')}
              </div>
              {project.achievements.length > 0 && (
                <ul style={{ 
                  fontSize: '12px', 
                  color: '#334155', 
                  margin: 0, 
                  paddingLeft: '14px',
                  lineHeight: '1.5'
                }}>
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} style={{ marginBottom: '2px' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* 教育背景 */}
        <section style={{ marginBottom: '20px' }}>
          <h2 
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px'
            }}
          >
            教育背景
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '12px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>
                  {edu.school}
                </span>
                <span style={{ fontSize: '11px', color: '#64748b' }}>
                  {edu.startDate} - {edu.endDate || '至今'}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: '#334155', marginBottom: '4px' }}>
                {edu.degree} | {edu.major}
                {edu.gpa && <span style={{ marginLeft: '8px', color: '#64748b' }}>GPA: {edu.gpa}</span>}
              </div>
              {edu.description && (
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>

        {/* 技能 */}
        <section style={{ marginBottom: '20px' }}>
          <h2 
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px'
            }}
          >
            技能
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {data.skills.map((skill, index) => (
              <div key={index} style={{ fontSize: '12px', color: '#334155' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <span style={{ fontWeight: '600' }}>{skill.name}</span>
                  <span style={{ fontSize: '10px', color: '#64748b', backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '8px' }}>
                    {skill.level}
                  </span>
                </div>
                <div style={{ fontSize: '10px', color: '#64748b' }}>{skill.category}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 证书 */}
        <section style={{ marginBottom: '20px' }}>
          <h2 
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '4px'
            }}
          >
            证书
          </h2>
          {data.certificates.map((cert, index) => (
            <div key={index} style={{ marginBottom: '8px', fontSize: '12px', color: '#334155' }}>
              <div style={{ fontWeight: '600', marginBottom: '2px' }}>{cert.name}</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>{cert.issuer} • {cert.date}</div>
            </div>
          ))}
        </section>

        {/* 语言和兴趣 */}
        <section>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <h3 
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                语言能力
              </h3>
              <div style={{ fontSize: '12px', color: '#334155' }}>
                {data.languages.map((lang, index) => (
                  <span key={index} style={{ display: 'inline-block', marginRight: '8px', marginBottom: '4px' }}>
                    {lang}{index < data.languages.length - 1 && ' • '}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                兴趣爱好
              </h3>
              <div style={{ fontSize: '12px', color: '#334155' }}>
                {data.interests.map((interest, index) => (
                  <span key={index} style={{ display: 'inline-block', marginRight: '8px', marginBottom: '4px' }}>
                    {interest}{index < data.interests.length - 1 && ' • '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}