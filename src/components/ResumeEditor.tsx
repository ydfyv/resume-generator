import React, { useState } from 'react'
import { 
  Form, 
  Input, 
  Button, 
  Card, 
  Space, 
  Typography, 
  Select, 
  DatePicker, 
  InputNumber, 
  Divider, 
  Tag, 
  message,
  Row,
  Col
} from 'antd'
import { 
  PlusOutlined, 
  DeleteOutlined, 
  DownloadOutlined,
  ReloadOutlined,
  EyeOutlined
} from '@ant-design/icons'
import { useResumeStore } from '../store/resumeStore'
import { WorkExperience, Project, Skill, Certificate, TemplateType } from '../types/resume'
import dayjs from 'dayjs'

const { TextArea } = Input
const { Option } = Select
const { Text } = Typography

export const ResumeEditor: React.FC = () => {
  const [form] = Form.useForm()
  const {
    data,
    template,
    updateContact,
    updateData,
    addEducation,
    updateEducation,
    removeEducation,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    addProject,
    updateProject,
    removeProject,
    addSkill,
    updateSkill,
    removeSkill,
    addCertificate,
    updateCertificate,
    removeCertificate,
    setTemplate,
    resetData,
    loadSampleData,
    saveToLocalStorage
  } = useResumeStore()

  const [activeTab, setActiveTab] = useState('basic')

  const handleExportPDF = async () => {
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = document.getElementById('resume-preview-container')
      
      if (!element) {
        message.error('预览容器不存在')
        return
      }

      const opt = {
        margin: 1,
        filename: `${data.contact.name}-简历.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm' as const, format: 'a4' as const, orientation: 'portrait' as const }
      }

      html2pdf().set(opt).from(element).save()
      message.success('PDF导出成功')
    } catch (error) {
      console.error('PDF导出失败:', error)
      message.error('PDF导出失败')
    }
  }

  const templateOptions = [
    { label: '简约两栏', value: 'simple' },
    { label: '现代创意', value: 'modern' },
    { label: '极简单栏', value: 'minimal' }
  ]

  return (
    <div className="space-y-6">
      {/* 工具栏 */}
      <Card bordered={false} className="mb-6">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button 
              type="primary" 
              icon={<DownloadOutlined />}
              onClick={handleExportPDF}
              className="bg-blue-600 border-blue-600 hover:bg-blue-700"
            >
              导出PDF
            </Button>
            <Button 
              icon={<ReloadOutlined />}
              onClick={resetData}
              className="border-gray-300 hover:border-gray-400"
            >
              重置
            </Button>
            <Button 
              icon={<EyeOutlined />}
              onClick={loadSampleData}
              className="border-gray-300 hover:border-gray-400"
            >
              导入示例
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Text className="text-sm text-gray-600">模板:</Text>
            <Select
              value={template}
              onChange={setTemplate}
              style={{ width: 160 }}
              size="small"
            >
              {templateOptions.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </Card>

      {/* 基本信息 */}
      <Card title="基本信息" size="small">
        <Form layout="vertical" form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="姓名" required>
                <Input
                  value={data.contact.name}
                  onChange={(e) => updateContact('name', e.target.value)}
                  placeholder="请输入姓名"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="邮箱" required>
                <Input
                  type="email"
                  value={data.contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="电话" required>
                <Input
                  value={data.contact.phone}
                  onChange={(e) => updateContact('phone', e.target.value)}
                  placeholder="请输入电话"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="所在地">
                <Input
                  value={data.contact.location}
                  onChange={(e) => updateContact('location', e.target.value)}
                  placeholder="请输入所在地"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="个人网站">
                <Input
                  value={data.contact.website || ''}
                  onChange={(e) => updateContact('website', e.target.value)}
                  placeholder="https://"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="GitHub">
                <Input
                  value={data.contact.github || ''}
                  onChange={(e) => updateContact('github', e.target.value)}
                  placeholder="https://github.com/"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="LinkedIn">
                <Input
                  value={data.contact.linkedin || ''}
                  onChange={(e) => updateContact('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* 个人总结 */}
      <Card title="个人总结" size="small">
        <Form.Item>
          <TextArea
            value={data.summary}
            onChange={(e) => updateData('summary', e.target.value)}
            placeholder="请输入个人总结，建议150-300字"
            rows={4}
            showCount
            maxLength={500}
          />
        </Form.Item>
      </Card>

      {/* 教育背景 */}
      <Card 
        title="教育背景" 
        size="small"
        extra={
          <Button type="link" icon={<PlusOutlined />} onClick={addEducation}>
            添加教育经历
          </Button>
        }
      >
        {data.education.map((edu, index) => (
          <Card 
            key={edu.id} 
            size="small" 
            className="mb-3"
            extra={
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />}
                onClick={() => removeEducation(edu.id)}
              >
                删除
              </Button>
            }
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="学校名称" required>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    placeholder="请输入学校名称"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="学位" required>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder="如：本科、硕士"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="专业">
                  <Input
                    value={edu.major}
                    onChange={(e) => updateEducation(edu.id, 'major', e.target.value)}
                    placeholder="请输入专业"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="开始时间">
                  <DatePicker
                    value={edu.startDate ? dayjs(edu.startDate) : null}
                    onChange={(date) => updateEducation(edu.id, 'startDate', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="结束时间">
                  <DatePicker
                    value={edu.endDate ? dayjs(edu.endDate) : null}
                    onChange={(date) => updateEducation(edu.id, 'endDate', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="GPA">
                  <Input
                    value={edu.gpa || ''}
                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                    placeholder="如：3.8/4.0"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="描述">
              <TextArea
                value={edu.description || ''}
                onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                placeholder="可填写主修课程、荣誉奖项等"
                rows={2}
              />
            </Form.Item>
          </Card>
        ))}
      </Card>

      {/* 工作经历 */}
      <Card 
        title="工作经历" 
        size="small"
        extra={
          <Button type="link" icon={<PlusOutlined />} onClick={addWorkExperience}>
            添加工作经历
          </Button>
        }
      >
        {data.workExperience.map((exp, index) => (
          <Card 
            key={exp.id} 
            size="small" 
            className="mb-3"
            extra={
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />}
                onClick={() => removeWorkExperience(exp.id)}
              >
                删除
              </Button>
            }
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="公司名称" required>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                    placeholder="请输入公司名称"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="职位" required>
                  <Input
                    value={exp.position}
                    onChange={(e) => updateWorkExperience(exp.id, 'position', e.target.value)}
                    placeholder="请输入职位"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="开始时间">
                  <DatePicker
                    value={exp.startDate ? dayjs(exp.startDate) : null}
                    onChange={(date) => updateWorkExperience(exp.id, 'startDate', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="结束时间">
                  <DatePicker
                    value={exp.endDate !== '至今' && exp.endDate ? dayjs(exp.endDate) : null}
                    onChange={(date) => updateWorkExperience(exp.id, 'endDate', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="工作描述">
              <TextArea
                value={exp.description}
                onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                placeholder="请描述你的主要职责和工作内容"
                rows={3}
              />
            </Form.Item>
            <Form.Item label="主要成就">
              {exp.achievements.map((achievement, achievementIndex) => (
                <div key={achievementIndex} className="flex gap-2 mb-2">
                  <Input
                    value={achievement}
                    onChange={(e) => {
                      const newAchievements = [...exp.achievements]
                      newAchievements[achievementIndex] = e.target.value
                      updateWorkExperience(exp.id, 'achievements', newAchievements)
                    }}
                    placeholder={`成就 ${achievementIndex + 1}`}
                  />
                  {exp.achievements.length > 1 && (
                    <Button
                      type="text"
                      danger
                      onClick={() => {
                        const newAchievements = exp.achievements.filter((_, i) => i !== achievementIndex)
                        updateWorkExperience(exp.id, 'achievements', newAchievements)
                      }}
                    >
                      删除
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="dashed"
                onClick={() => {
                  const newAchievements = [...exp.achievements, '']
                  updateWorkExperience(exp.id, 'achievements', newAchievements)
                }}
                icon={<PlusOutlined />}
              >
                添加成就
              </Button>
            </Form.Item>
          </Card>
        ))}
      </Card>

      {/* 项目经验 */}
      <Card 
        title="项目经验" 
        size="small"
        extra={
          <Button type="link" icon={<PlusOutlined />} onClick={addProject}>
            添加项目
          </Button>
        }
      >
        {data.projects.map((project, index) => (
          <Card 
            key={project.id} 
            size="small" 
            className="mb-3"
            extra={
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />}
                onClick={() => removeProject(project.id)}
              >
                删除
              </Button>
            }
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="项目名称" required>
                  <Input
                    value={project.name}
                    onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                    placeholder="请输入项目名称"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="担任角色" required>
                  <Input
                    value={project.role}
                    onChange={(e) => updateProject(project.id, 'role', e.target.value)}
                    placeholder="如：前端负责人、核心开发者"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="开始时间">
                  <DatePicker
                    value={project.startDate ? dayjs(project.startDate) : null}
                    onChange={(date) => updateProject(project.id, 'startDate', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="结束时间">
                  <DatePicker
                    value={project.endDate !== '至今' && project.endDate ? dayjs(project.endDate) : null}
                    onChange={(date) => updateProject(project.id, 'endDate', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="项目描述">
              <TextArea
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                placeholder="请描述项目背景、你的职责和项目成果"
                rows={3}
              />
            </Form.Item>
            <Form.Item label="技术栈">
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex gap-2 mb-2">
                  <Input
                    value={tech}
                    onChange={(e) => {
                      const newTechnologies = [...project.technologies]
                      newTechnologies[techIndex] = e.target.value
                      updateProject(project.id, 'technologies', newTechnologies)
                    }}
                    placeholder={`技术 ${techIndex + 1}`}
                  />
                  {project.technologies.length > 1 && (
                    <Button
                      type="text"
                      danger
                      onClick={() => {
                        const newTechnologies = project.technologies.filter((_, i) => i !== techIndex)
                        updateProject(project.id, 'technologies', newTechnologies)
                      }}
                    >
                      删除
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="dashed"
                onClick={() => {
                  const newTechnologies = [...project.technologies, '']
                  updateProject(project.id, 'technologies', newTechnologies)
                }}
                icon={<PlusOutlined />}
              >
                添加技术
              </Button>
            </Form.Item>
            <Form.Item label="项目成果">
              {project.achievements.map((achievement, achievementIndex) => (
                <div key={achievementIndex} className="flex gap-2 mb-2">
                  <Input
                    value={achievement}
                    onChange={(e) => {
                      const newAchievements = [...project.achievements]
                      newAchievements[achievementIndex] = e.target.value
                      updateProject(project.id, 'achievements', newAchievements)
                    }}
                    placeholder={`成果 ${achievementIndex + 1}`}
                  />
                  {project.achievements.length > 1 && (
                    <Button
                      type="text"
                      danger
                      onClick={() => {
                        const newAchievements = project.achievements.filter((_, i) => i !== achievementIndex)
                        updateProject(project.id, 'achievements', newAchievements)
                      }}
                    >
                      删除
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="dashed"
                onClick={() => {
                  const newAchievements = [...project.achievements, '']
                  updateProject(project.id, 'achievements', newAchievements)
                }}
                icon={<PlusOutlined />}
              >
                添加成果
              </Button>
            </Form.Item>
          </Card>
        ))}
      </Card>

      {/* 技能 */}
      <Card 
        title="技能" 
        size="small"
        extra={
          <Button type="link" icon={<PlusOutlined />} onClick={addSkill}>
            添加技能
          </Button>
        }
      >
        {data.skills.map((skill, index) => (
          <Card 
            key={skill.id} 
            size="small" 
            className="mb-3"
            extra={
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />}
                onClick={() => removeSkill(skill.id)}
              >
                删除
              </Button>
            }
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="技能名称" required>
                  <Input
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                    placeholder="如：JavaScript、React"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="掌握程度" required>
                  <Select
                    value={skill.level}
                    onChange={(value) => updateSkill(skill.id, 'level', value)}
                    style={{ width: '100%' }}
                  >
                    <Option value="基础">基础</Option>
                    <Option value="熟练">熟练</Option>
                    <Option value="精通">精通</Option>
                    <Option value="专家">专家</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="技能分类" required>
                  <Select
                    value={skill.category}
                    onChange={(value) => updateSkill(skill.id, 'category', value)}
                    style={{ width: '100%' }}
                  >
                    <Option value="编程语言">编程语言</Option>
                    <Option value="框架">框架</Option>
                    <Option value="工具">工具</Option>
                    <Option value="软技能">软技能</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        ))}
      </Card>

      {/* 证书 */}
      <Card 
        title="证书" 
        size="small"
        extra={
          <Button type="link" icon={<PlusOutlined />} onClick={addCertificate}>
            添加证书
          </Button>
        }
      >
        {data.certificates.map((cert, index) => (
          <Card 
            key={cert.id} 
            size="small" 
            className="mb-3"
            extra={
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />}
                onClick={() => removeCertificate(cert.id)}
              >
                删除
              </Button>
            }
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="证书名称" required>
                  <Input
                    value={cert.name}
                    onChange={(e) => updateCertificate(cert.id, 'name', e.target.value)}
                    placeholder="请输入证书名称"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="颁发机构" required>
                  <Input
                    value={cert.issuer}
                    onChange={(e) => updateCertificate(cert.id, 'issuer', e.target.value)}
                    placeholder="请输入颁发机构"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="获得时间" required>
                  <DatePicker
                    value={cert.date ? dayjs(cert.date) : null}
                    onChange={(date) => updateCertificate(cert.id, 'date', date?.format('YYYY-MM') || '')}
                    format="YYYY-MM"
                    picker="month"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="证书描述">
              <TextArea
                value={cert.description || ''}
                onChange={(e) => updateCertificate(cert.id, 'description', e.target.value)}
                placeholder="可填写证书等级、有效期等信息"
                rows={2}
              />
            </Form.Item>
          </Card>
        ))}
      </Card>

      {/* 语言和兴趣 */}
      <Card title="语言和兴趣" size="small">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="语言能力">
              <Select
                mode="tags"
                value={data.languages}
                onChange={(value) => updateData('languages', value)}
                placeholder="请输入掌握的语言"
                style={{ width: '100%' }}
              >
                {data.languages.map(lang => (
                  <Option key={lang} value={lang}>{lang}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="兴趣爱好">
              <Select
                mode="tags"
                value={data.interests}
                onChange={(value) => updateData('interests', value)}
                placeholder="请输入兴趣爱好"
                style={{ width: '100%' }}
              >
                {data.interests.map(interest => (
                  <Option key={interest} value={interest}>{interest}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </div>
  )
}