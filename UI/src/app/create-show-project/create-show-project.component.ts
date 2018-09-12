import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create-show-project',
  templateUrl: './create-show-project.component.html',
  styleUrls: ['./create-show-project.component.css']
})
export class CreateShowProjectComponent implements OnInit {

  // 控制新建项目模态的弹出
  showCP = false;
  // 控制添加参与人模态的弹出
  showAddMember = false;

  // 项目名称
  projectName: string;
  // 项目描述
  description: string;
  // 返回结果
  respData: object;
  // 参与人名称
  memberName: string;
  // 用户名称
  userName: string;

  constructor(
    private httpRequestService: HttpRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    // 取出用户名
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
    this.getProjectList();
  }

  // 弹出"新建项目"模态框
  createProject() {
    this.showCP = true;
  }

  // "新建项目"表单提交
  submitCreForm(formData) {
    if (formData.form.valid) {
      const reqBody = { projectName: this.projectName, description: this.description, userName: this.userName };
      // 请求数据
      const respData = this.httpRequestService.createNewProject(reqBody).subscribe(
        data => {
          // 显示返回数据信息
          alert(data['return_msg']);
          // 返回成功状态
          if (data['return_code'] === '9000') {
            // 关闭模态框
            this.showCP = false;
            this.getProjectList();
          }
        }
      );
    }

  }

  // 获取项目列表
  getProjectList() {
    const reqBody = { userName: this.userName };
    const respData = this.httpRequestService.getProjectList(reqBody).subscribe(
      data => {
        // 返回成功状态
        if (data['return_code'] === '9000') {
          // 取出项目列表
          this.respData = data['return_msg'];
        } else {
          alert('查询失败!');
        }
      }
    );
  }

  // 弹出"添加参与人"模态框
  addMember(data: any) {
    this.projectName = data['projectName'];
    // 显示模态框
    this.showAddMember = true;
  }

  // "添加参与人"表单提交
  submitAddMemForm(formData) {
    if (formData.form.valid) {
      // 请求数据
      const reqBody = { projectName: this.projectName, member: this.memberName };
      // 返回数据
      const respData = this.httpRequestService.addMember(reqBody).subscribe(
        data => {
          // 显示返回数据信息
          alert(data['return_msg']);
          // 返回成功状态
          if (data['return_code'] === '9000') {
            // 重新获取项目列表
            this.getProjectList();
            // 关闭模态框
            this.showAddMember = false;
          }
        }
      );

    }
  }

  turnToS(projectName) {
    localStorage.setItem('fileName', projectName);
    // this.router.navigate(['/assets/swagger-editor/editor.html']);
    window.location.assign('/assets/swagger-editor/editor.html');
  }
}
