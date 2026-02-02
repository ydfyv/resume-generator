export interface ContactInfo {
  name: string
  email: string
  phone: string
  location: string
  website?: string
  github?: string
  linkedin?: string
}

export interface Education {
  id: string
  school: string
  degree: string
  major: string
  startDate: string
  endDate: string
  gpa?: string
  description?: string
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | '至今'
  description: string
  achievements: string[]
}

export interface Project {
  id: string
  name: string
  role: string
  startDate: string
  endDate: string | '至今'
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Skill {
  id: string
  name: string
  level: '基础' | '熟练' | '精通' | '专家'
  category: '编程语言' | '框架' | '工具' | '软技能' | '其他'
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  date: string
  description?: string
}

export interface ResumeData {
  contact: ContactInfo
  summary: string
  education: Education[]
  workExperience: WorkExperience[]
  projects: Project[]
  skills: Skill[]
  certificates: Certificate[]
  languages: string[]
  interests: string[]
}

export type TemplateType = 'simple' | 'modern' | 'minimal'

export interface ResumeStore {
  data: ResumeData
  template: TemplateType
  isEditing: boolean
  updateData: (field: keyof ResumeData, value: any) => void
  updateContact: (field: keyof ContactInfo, value: string) => void
  addEducation: () => void
  updateEducation: (id: string, field: keyof Education, value: any) => void
  removeEducation: (id: string) => void
  addWorkExperience: () => void
  updateWorkExperience: (id: string, field: keyof WorkExperience, value: any) => void
  removeWorkExperience: (id: string) => void
  addProject: () => void
  updateProject: (id: string, field: keyof Project, value: any) => void
  removeProject: (id: string) => void
  addSkill: () => void
  updateSkill: (id: string, field: keyof Skill, value: any) => void
  removeSkill: (id: string) => void
  addCertificate: () => void
  updateCertificate: (id: string, field: keyof Certificate, value: any) => void
  removeCertificate: (id: string) => void
  setTemplate: (template: TemplateType) => void
  resetData: () => void
  loadSampleData: () => void
  saveToLocalStorage: () => void
  loadFromLocalStorage: () => void
}