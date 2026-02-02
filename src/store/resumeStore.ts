import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ResumeData, ResumeStore, TemplateType } from '../types/resume'
import { v4 as uuidv4 } from 'uuid'

// 初始数据
const initialData: ResumeData = {
  contact: {
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '138-0000-0000',
    location: '北京',
    website: '',
    github: '',
    linkedin: ''
  },
  summary: '5年经验的前端开发工程师，专注于用户体验和性能优化，熟悉React、Vue等主流框架，具备良好的团队协作能力。',
  education: [
    {
      id: uuidv4(),
      school: '清华大学',
      degree: '本科',
      major: '计算机科学与技术',
      startDate: '2015-09',
      endDate: '2019-06',
      gpa: '3.8/4.0',
      description: '主修课程：数据结构、算法设计、计算机网络、数据库系统等'
    }
  ],
  workExperience: [
    {
      id: uuidv4(),
      company: '字节跳动',
      position: '前端开发工程师',
      startDate: '2019-07',
      endDate: '至今',
      description: '负责公司核心产品的前端开发工作，参与多个大型项目的架构设计和开发。',
      achievements: [
        '主导重构了公司主站，性能提升40%，用户留存率提升15%',
        '设计并实现了组件库，被10+项目采用，开发效率提升30%',
        '优化了移动端页面加载速度，首屏时间从3s降低到1.2s'
      ]
    },
    {
      id: uuidv4(),
      company: '腾讯',
      position: '前端开发实习生',
      startDate: '2018-06',
      endDate: '2018-09',
      description: '参与微信小程序相关功能开发，学习并实践了前端工程化流程。',
      achievements: [
        '独立开发了小程序数据统计模块，日活用户达10万+',
        '优化了小程序包体积，从2MB降低到1.2MB'
      ]
    }
  ],
  projects: [
    {
      id: uuidv4(),
      name: '电商管理系统',
      role: '前端负责人',
      startDate: '2020-03',
      endDate: '2020-12',
      description: '基于React + TypeScript开发的B端管理系统，包含商品管理、订单管理、用户管理等模块。',
      technologies: ['React', 'TypeScript', 'Ant Design', 'Redux', 'Webpack'],
      achievements: [
        '实现了可配置的表单生成器，支持动态表单渲染',
        '设计了通用的数据表格组件，支持分页、排序、筛选等功能',
        '项目代码复用率达到70%以上'
      ]
    },
    {
      id: uuidv4(),
      name: '移动端H5活动页',
      role: '核心开发者',
      startDate: '2021-02',
      endDate: '2021-04',
      description: '为公司618活动开发的移动端H5页面，包含抽奖、分享、邀请等功能。',
      technologies: ['Vue.js', 'Vant', 'Webpack', 'Node.js'],
      achievements: [
        '实现了服务端渲染，首屏加载时间优化至1.5s以内',
        '活动期间UV达到50万，转化率达到12%'
      ]
    }
  ],
  skills: [
    {
      id: uuidv4(),
      name: 'JavaScript/TypeScript',
      level: '精通',
      category: '编程语言'
    },
    {
      id: uuidv4(),
      name: 'React',
      level: '精通',
      category: '框架'
    },
    {
      id: uuidv4(),
      name: 'Vue.js',
      level: '熟练',
      category: '框架'
    },
    {
      id: uuidv4(),
      name: 'Webpack/Vite',
      level: '熟练',
      category: '工具'
    },
    {
      id: uuidv4(),
      name: 'Git',
      level: '熟练',
      category: '工具'
    },
    {
      id: uuidv4(),
      name: '团队协作',
      level: '精通',
      category: '软技能'
    }
  ],
  certificates: [
    {
      id: uuidv4(),
      name: '前端开发工程师认证',
      issuer: '腾讯课堂',
      date: '2019-12',
      description: '通过腾讯课堂前端开发工程师认证考试'
    }
  ],
  languages: ['中文（母语）', '英语（CET-6）'],
  interests: ['前端技术研究', '开源项目贡献', '摄影', '旅行']
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      data: initialData,
      template: 'simple',
      isEditing: false,

      updateData: (field, value) =>
        set((state) => ({
          data: { ...state.data, [field]: value }
        })),

      updateContact: (field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            contact: { ...state.data.contact, [field]: value }
          }
        })),

      addEducation: () =>
        set((state) => ({
          data: {
            ...state.data,
            education: [
              ...state.data.education,
              {
                id: uuidv4(),
                school: '',
                degree: '',
                major: '',
                startDate: '',
                endDate: '',
                gpa: '',
                description: ''
              }
            ]
          }
        })),

      updateEducation: (id, field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.map((edu) =>
              edu.id === id ? { ...edu, [field]: value } : edu
            )
          }
        })),

      removeEducation: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.filter((edu) => edu.id !== id)
          }
        })),

      addWorkExperience: () =>
        set((state) => ({
          data: {
            ...state.data,
            workExperience: [
              ...state.data.workExperience,
              {
                id: uuidv4(),
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                description: '',
                achievements: ['']
              }
            ]
          }
        })),

      updateWorkExperience: (id, field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            workExperience: state.data.workExperience.map((exp) =>
              exp.id === id ? { ...exp, [field]: value } : exp
            )
          }
        })),

      removeWorkExperience: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            workExperience: state.data.workExperience.filter(
              (exp) => exp.id !== id
            )
          }
        })),

      addProject: () =>
        set((state) => ({
          data: {
            ...state.data,
            projects: [
              ...state.data.projects,
              {
                id: uuidv4(),
                name: '',
                role: '',
                startDate: '',
                endDate: '',
                description: '',
                technologies: [''],
                achievements: ['']
              }
            ]
          }
        })),

      updateProject: (id, field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.map((project) =>
              project.id === id ? { ...project, [field]: value } : project
            )
          }
        })),

      removeProject: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.filter((project) => project.id !== id)
          }
        })),

      addSkill: () =>
        set((state) => ({
          data: {
            ...state.data,
            skills: [
              ...state.data.skills,
              {
                id: uuidv4(),
                name: '',
                level: '基础',
                category: '编程语言'
              }
            ]
          }
        })),

      updateSkill: (id, field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.map((skill) =>
              skill.id === id ? { ...skill, [field]: value } : skill
            )
          }
        })),

      removeSkill: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.filter((skill) => skill.id !== id)
          }
        })),

      addCertificate: () =>
        set((state) => ({
          data: {
            ...state.data,
            certificates: [
              ...state.data.certificates,
              {
                id: uuidv4(),
                name: '',
                issuer: '',
                date: '',
                description: ''
              }
            ]
          }
        })),

      updateCertificate: (id, field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            certificates: state.data.certificates.map((cert) =>
              cert.id === id ? { ...cert, [field]: value } : cert
            )
          }
        })),

      removeCertificate: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            certificates: state.data.certificates.filter(
              (cert) => cert.id !== id
            )
          }
        })),

      setTemplate: (template) => set({ template }),

      resetData: () => set({ data: initialData }),

      loadSampleData: () => set({ data: initialData }),

      saveToLocalStorage: () => {
        // Zustand persist 会自动处理
      },

      loadFromLocalStorage: () => {
        // Zustand persist 会自动处理
      }
    }),
    {
      name: 'resume-storage',
      partialize: (state) => ({
        data: state.data,
        template: state.template
      })
    }
  )
)