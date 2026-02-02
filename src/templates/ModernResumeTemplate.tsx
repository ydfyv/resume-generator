import React from 'react'
import { ResumeData } from '../types/resume'

interface ModernResumeTemplateProps {
  data: ResumeData
}

export const ModernResumeTemplate: React.FC<ModernResumeTemplateProps> = ({ data }) => {
  return (
    <div 
      className="resume-template modern-template"
      style={{
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        padding: '20mm 18mm',
        fontFamily: 'Inter, HarmonyOS Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        lineHeight: '1.6',
        color: '#1e293b',
        backgroundColor: '#ffffff'
      }}
    >
      {/* 头部信息 - 现代设计 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        marginBottom: '24px',
        borderBottom: '3px solid #2563eb',
        paddingBottom: '16px'
      }}>
        <div>
          <h1 
            style={{
              fontSize: '32px',
              fontWeight: '800',
              margin: '0 0 4px 0',
              color: '#0f172a',
              letterSpacing: '-1px'
            }}
          >
            {data.contact.name}
          </h1>
          <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
            {data.contact.location} | {data.contact.phone} | {data.contact.email}
          </div>
        </div>
        <div style={{ 
          textAlign: 'right',
          fontSize: '12px',
          color: '#64748b'
        }}>
          {data.contact.website && <div>{data.contact.website}</div>}
          {data.contact.github && <div>Github: {data.contact.github}</div>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }}>
        {/* 左侧主内容区 */}
        <div>
          {/* 个人总结 */}
          <section style={{ marginBottom: '24px' }}>
            <h2 
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#2563eb',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '2px solid #2563eb',
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

          {/* 工作经历 */}
          <section style={{ marginBottom: '24px' }}>
            <h2 
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '2px solid #e2e8f0',
                paddingBottom: '4px'
              }}
            >
              工作经历
            </h2>
            {data.workExperience.map((exp, index) => (
              <div key={index} style={{ marginBottom: '20px', position: 'relative' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'baseline', 
                  marginBottom: '6px',
                  paddingRight: '20px'
                }}>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '700', 
                    margin: 0,
                    color: '#0f172a'
                  }}>
                    {exp.company}
                  </h3>
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#64748b',
                    backgroundColor: '#f1f5f9',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: '600'
                  }}>
                    {exp.startDate} - {exp.endDate || '至今'}
                  </span>
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#2563eb', 
                  marginBottom: '8px', 
                  fontWeight: '600'
                }}>
                  {exp.position}
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#334155', 
                  marginBottom: '12px', 
                  lineHeight: '1.7'
                }}>
                  {exp.description}
                </p>
                {exp.achievements.length > 0 && (
                  <div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#64748b',
                      fontWeight: '600',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      主要成就
                    </div>
                    <ul style={{ 
                      fontSize: '13px', 
                      color: '#334155', 
                      margin: 0, 
                      paddingLeft: '18px',
                      lineHeight: '1.6'
                    }}>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} style={{ marginBottom: '4px' }}>
                          <span style={{ color: '#2563eb', fontWeight: '600' }}>•</span> {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* 项目经验 */}
          <section style={{ marginBottom: '24px' }}>
            <h2 
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '2px solid #e2e8f0',
                paddingBottom: '4px'
              }}
            >
              项目经验
            </h2>
            {data.projects.map((project, index) => (
              <div key={index} style={{ marginBottom: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'baseline', 
                  marginBottom: '6px'
                }}>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '700', 
                    margin: 0,
                    color: '#0f172a'
                  }}>
                    {project.name}
                  </h3>
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#64748b',
                    backgroundColor: '#f1f5f9',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: '600'
                  }}>
                    {project.startDate} - {project.endDate || '至今'}
                  </span>
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#2563eb', 
                  marginBottom: '8px', 
                  fontWeight: '600'
                }}>
                  {project.role}
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#334155', 
                  marginBottom: '12px', 
                  lineHeight: '1.7'
                }}>
                  {project.description}
                </p>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#64748b', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  技术栈: {project.technologies.join(' • ')}
                </div>
                {project.achievements.length > 0 && (
                  <div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#64748b',
                      fontWeight: '600',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      项目成果
                    </div>
                    <ul style={{ 
                      fontSize: '13px', 
                      color: '#334155', 
                      margin: 0, 
                      paddingLeft: '18px',
                      lineHeight: '1.6'
                    }}>
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} style={{ marginBottom: '4px' }}>
                          <span style={{ color: '#2563eb', fontWeight: '600' }}>•</span> {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>

        {/* 右侧边栏 */}
        <div style={{ 
          backgroundColor: '#f8fafc',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          {/* 教育背景 */}
          <section style={{ marginBottom: '20px' }}>
            <h3 
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px'
              }}
            >
              教育背景
            </h3>
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
            <h3 
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px'
              }}
            >
              技能
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {data.skills.map((skill, index) => (
                <div key={index} style={{ fontSize: '12px', color: '#334155' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                    <span style={{ fontWeight: '600' }}>{skill.name}</span>
                    <span style={{ fontSize: '10px', color: '#64748b', backgroundColor: '#e2e8f0', padding: '1px 6px', borderRadius: '10px' }}>
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
            <h3 
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px'
              }}
            >
              证书
            </h3>
            {data.certificates.map((cert, index) => (
              <div key={index} style={{ marginBottom: '8px', fontSize: '12px', color: '#334155' }}>
                <div style={{ fontWeight: '600', marginBottom: '2px' }}>{cert.name}</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>{cert.issuer} • {cert.date}</div>
              </div>
            ))}
          </section>

          {/* 语言能力 */}
          <section style={{ marginBottom: '20px' }}>
            <h3 
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px'
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
          </section>

          {/* 兴趣爱好 */}
          <section>
            <h3 
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px'
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
          </section>
        </div>
      </div>
    </div>
  )
}