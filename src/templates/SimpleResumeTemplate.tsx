import React from 'react'
import { ResumeData } from '../types/resume'

interface SimpleResumeTemplateProps {
  data: ResumeData
}

export const SimpleResumeTemplate: React.FC<SimpleResumeTemplateProps> = ({ data }) => {
  return (
    <div 
      className="resume-template simple-template"
      style={{
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        padding: '24mm 20mm',
        fontFamily: 'Inter, HarmonyOS Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        lineHeight: '1.6',
        color: '#1e293b',
        backgroundColor: '#ffffff'
      }}
    >
      {/* 头部信息 */}
      <div style={{ marginBottom: '24px' }}>
        <h1 
          style={{
            fontSize: '28px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            color: '#0f172a',
            letterSpacing: '-0.5px'
          }}
        >
          {data.contact.name}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#334155' }}>
          <span>{data.contact.phone}</span>
          <span>{data.contact.email}</span>
          <span>{data.contact.location}</span>
          {data.contact.website && <span>{data.contact.website}</span>}
          {data.contact.github && <span>Github: {data.contact.github}</span>}
        </div>
      </div>

      {/* 个人总结 */}
      <section style={{ marginBottom: '20px' }}>
        <h2 
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#0f172a',
            borderBottom: '2px solid #2563eb',
            paddingBottom: '4px',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          个人总结
        </h2>
        <p style={{ fontSize: '14px', color: '#334155', textAlign: 'justify' }}>
          {data.summary}
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* 左侧栏 */}
        <div>
          {/* 教育背景 */}
          <section style={{ marginBottom: '20px' }}>
            <h2 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              教育背景
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0 }}>{edu.school}</h3>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    {edu.startDate} - {edu.endDate || '至今'}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#334155', marginBottom: '4px' }}>
                  {edu.degree} | {edu.major}
                  {edu.gpa && <span style={{ marginLeft: '8px', color: '#64748b' }}>GPA: {edu.gpa}</span>}
                </div>
                {edu.description && (
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* 证书 */}
          <section style={{ marginBottom: '20px' }}>
            <h2 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              证书
            </h2>
            {data.certificates.map((cert, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500' }}>{cert.name}</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{cert.date}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{cert.issuer}</div>
                {cert.description && (
                  <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0 0' }}>
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* 语言能力 */}
          <section style={{ marginBottom: '20px' }}>
            <h2 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              语言能力
            </h2>
            <div style={{ fontSize: '13px', color: '#334155' }}>
              {data.languages.map((lang, index) => (
                <span key={index} style={{ display: 'inline-block', marginRight: '8px', marginBottom: '4px' }}>
                  {lang}{index < data.languages.length - 1 && ' • '}
                </span>
              ))}
            </div>
          </section>

          {/* 兴趣爱好 */}
          <section>
            <h2 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              兴趣爱好
            </h2>
            <div style={{ fontSize: '13px', color: '#334155' }}>
              {data.interests.map((interest, index) => (
                <span key={index} style={{ display: 'inline-block', marginRight: '8px', marginBottom: '4px' }}>
                  {interest}{index < data.interests.length - 1 && ' • '}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* 右侧栏 */}
        <div>
          {/* 工作经历 */}
          <section style={{ marginBottom: '20px' }}>
            <h2 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              工作经历
            </h2>
            {data.workExperience.map((exp, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0 }}>{exp.company}</h3>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    {exp.startDate} - {exp.endDate || '至今'}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#334155', marginBottom: '8px', fontWeight: '500' }}>
                  {exp.position}
                </div>
                <p style={{ fontSize: '13px', color: '#334155', marginBottom: '8px', lineHeight: '1.5' }}>
                  {exp.description}
                </p>
                {exp.achievements.length > 0 && (
                  <ul style={{ fontSize: '12px', color: '#334155', margin: 0, paddingLeft: '16px' }}>
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
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              项目经验
            </h2>
            {data.projects.map((project, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0 }}>{project.name}</h3>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    {project.startDate} - {project.endDate || '至今'}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#334155', marginBottom: '4px', fontWeight: '500' }}>
                  {project.role}
                </div>
                <p style={{ fontSize: '13px', color: '#334155', marginBottom: '8px', lineHeight: '1.5' }}>
                  {project.description}
                </p>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                  <strong>技术栈：</strong>
                  {project.technologies.join(' • ')}
                </div>
                {project.achievements.length > 0 && (
                  <ul style={{ fontSize: '12px', color: '#334155', margin: 0, paddingLeft: '16px' }}>
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

          {/* 技能 */}
          <section>
            <h2 
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '4px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              技能
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {data.skills.map((skill, index) => (
                <div key={index} style={{ fontSize: '13px', color: '#334155' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{skill.level}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>{skill.category}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}