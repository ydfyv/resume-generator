import React from 'react'
import { Layout } from 'antd'
import { ResumeEditor } from './components/ResumeEditor'
import { ResumePreview } from './components/ResumePreview'
import { useResumeStore } from './store/resumeStore'

const { Sider, Content } = Layout

function App() {
  const { template } = useResumeStore()

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* 左侧表单编辑区 */}
      <Sider
        width={500}
        theme="light"
        className="border-r border-gray-200 bg-gray-50"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px'
        }}
      >
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">简历生成器</h1>
            <p className="text-sm text-gray-600">实时预览，一键导出 PDF</p>
          </div>
          <ResumeEditor />
        </div>
      </Sider>

      {/* 右侧预览区 */}
      <Content className="bg-white p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              预览 - {template === 'simple' ? '简约两栏' : template === 'modern' ? '现代创意' : '极简单栏'}
            </h2>
          </div>
          <div 
            id="resume-preview-container"
            className="border border-gray-200 rounded-lg overflow-hidden"
            style={{ 
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 6px -1px, rgba(0, 0, 0, 0.04) 0px 2px 4px -1px'
            }}
          >
            <ResumePreview />
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default App