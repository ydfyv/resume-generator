import React from 'react'
import { useResumeStore } from '../store/resumeStore'
import { SimpleResumeTemplate } from '../templates/SimpleResumeTemplate'
import { ModernResumeTemplate } from '../templates/ModernResumeTemplate'
import { MinimalResumeTemplate } from '../templates/MinimalResumeTemplate'

export const ResumePreview: React.FC = () => {
  const { data, template } = useResumeStore()

  const renderTemplate = () => {
    switch (template) {
      case 'simple':
        return <SimpleResumeTemplate data={data} />
      case 'modern':
        return <ModernResumeTemplate data={data} />
      case 'minimal':
        return <MinimalResumeTemplate data={data} />
      default:
        return <SimpleResumeTemplate data={data} />
    }
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  )
}