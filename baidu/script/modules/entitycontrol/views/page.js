/**
 * @file ҳ�뷭ҳ���� Reflux View
 * @author �޽� cuijian03@baidu.com 2016.08.20
 */

import React, { Component } from 'react'
import { render } from 'react-dom'
import EntityAction from '../actions/entityAction'
import EntityStore from '../stores/entityStore'

var Page = React.createClass({
    getInitialState: function() {
        return {
            // ����������
            total: 0,
            // ��ǰҳ��
            currentPage: 1,
            // ������е�ҳ��
            inputPage: 1,
            // ��ҳ��
            totalPage: 0,
            // ��һҳ��ť����ʽ����Ϊlasepageon&lastPageOff����
            lastPage: 'lastPageOff',
            // ��һҳ��ť����ʽ����ΪnextPageOn&nextPageOff����
            nextPage: 'nextPageOff',
            // ��ҳ״̬�������ڷ�ҳ�����У���ҳ��ť���ɵ�
            cliking: 0
        }
    },
    componentDidMount: function () {
        EntityStore.listen(this.onStatusChange);
    }, 
    onStatusChange: function (type,data) {
        switch (type){
            case 'total':
                this.listenTotal(data);
            break;
            case 'totalpage':
                this.listenTotalpage(data);
            break;
            case 'listcomplete':
                this.listenListcomplete();
            break;
            case 'initpage' :
                this.listenInitpage();
            break;
        }
    },
    /**
     * ��ӦStore total�¼���������������
     *
     * @param {number} ��������
     */
    listenTotal: function(data) {
        this.setState({total: data});
    },
    /**
     * ��ӦStore totalpage�¼���������������
     *
     * @param {data} ��ҳ��
     */
    listenTotalpage: function(data) {
        this.setState({totalPage:data});
        this.setSwichPageStyle(this.state.currentPage);
    },
    /**
     * ��ӦStore listcomplete�¼���������ҳ��ť�ɵ�
     *
     */
    listenListcomplete: function() {
        this.setState({cliking: 0});
    },
    /**
     * ��ӦStore initpage�¼�����ʼ��ҳ��Ͱ�ť״̬
     *
     */
    listenInitpage: function() {
        this.setState({
            // ����������
            total: 0,
            // ��ǰҳ��
            currentPage: 1,
            // ������е�ҳ��
            inputPage: 1,
            // ��ҳ��
            totalPage: 0,
            // ��һҳ��ť����ʽ����Ϊlasepageon&lastPageOff����
            lastPage: 'lastPageOff',
            // ��һҳ��ť����ʽ����ΪnextPageOn&nextPageOff����
            nextPage: 'nextPageOff',
            // ��ҳ״̬�������ڷ�ҳ�����У���ҳ��ť���ɵ�
            cliking: 0
        });
    },
    /**
     * DOM�����ص���ҳ������value�仯
     *
     * @param {object} event �¼����� 
     */
    handleChange: function (event) {
        this.setState({inputPage:event.target.value});
    },
    /**
     * DOM�����ص���ҳ������valueȷ��
     *
     * @param {object} event �¼����� 
     */
    handleBlur: function (event) {
        if(parseInt(event.target.value) > 0 && parseInt(event.target.value) <= this.state.totalPage) {
            this.setState({inputPage: parseInt(event.target.value)});
        } else {
            this.setState({inputPage: 1});
        }
    },
    /**
     * DOM�����ص��������תҳ�水ť
     *
     * @param {object} event �¼����� 
     */
    handleJumppage: function (event) {
        if(this.state.currentPage == this.state.inputPage || this.state.cliking === 1) {
            return;
        }
        var jumpPage = this.state.inputPage;
        this.setState({currentPage: jumpPage});
        EntityAction.list(jumpPage);
        this.setState({cliking: 1});
    },
    /**
     * DOM�����ص��������һҳ
     *
     * @param {object} event �¼����� 
     */
    handleLastpage: function (event) {
        if(this.state.currentPage === 1 || this.state.cliking === 1) {
            return;
        } else {
            var lastPage = this.state.currentPage - 1;
            this.setState({currentPage: lastPage});
            this.setState({inputPage: lastPage});
            EntityAction.list(lastPage);
            this.setState({cliking: 1});
        }
    },
    /**
     * DOM�����ص��������һҳ
     *
     * @param {object} event �¼����� 
     */
    handleNextpage: function (event) {
        if(this.state.currentPage === this.state.totalPage || this.state.cliking === 1) {
            return;
        } else {
            var nextPage = this.state.currentPage + 1;
            this.setState({currentPage: nextPage});
            this.setState({inputPage: nextPage});
            EntityAction.list(nextPage);
            this.setState({cliking: 1});
        }
    },
    /**
     * DOM�����ص�������س�����
     *
     * @param {object} event �¼�����
     */
    handleKeyBoard: function(event) {
        if(this.state.currentPage == this.state.inputPage || this.state.cliking === 1) {
            return;
        }
        if(event.key === 'Enter') {   
            if(parseInt(event.target.value) > 0 && parseInt(event.target.value) <= this.state.totalPage) {
                this.setState({inputPage: parseInt(event.target.value)});
                var jumpPage = parseInt(event.target.value);
                this.setState({currentPage: jumpPage});
                EntityAction.list(jumpPage);
                this.setState({cliking: 1});
            } else {
                this.setState({inputPage: 1});
                var jumpPage = parseInt(1);
                this.setState({currentPage: jumpPage});
                EntityAction.list(jumpPage);
            }
        }
    },
    /**
     * view�ڲ������÷�ҳ��ť��ʽ
     *
     * @param {number} jumpPage Ҫ��ת����ҳ 
     */
    setSwichPageStyle: function (jumpPage) {
        if(jumpPage === 1) {
            this.setState({lastPage: 'lastPageOff'});
        } else {
            this.setState({lastPage: 'lastPageOn'});
        }
        if(jumpPage === this.state.totalPage) {
            this.setState({nextPage: 'nextPageOff'});
        } else {
            this.setState({nextPage: 'nextPageOn'});
        }
        this.setState({currentPage: jumpPage});
    },
    render: function () {
        var total = this.state.total;
        var currentPage = this.state.currentPage;
        var totalPage = this.state.totalPage;
        var lastPage = this.state.lastPage;
        var nextPage = this.state.nextPage;
        var inputPage = this.state.inputPage;
        return (
            <div className="page">
                <div className="totalPage">���ƣ�{total}��</div>
                <div className="jumpPage">
                    <input type="text" className="inputPage" value={inputPage} onChange={this.handleChange} onBlur={this.handleBlur} onKeyPress={this.handleKeyBoard}/>
                    <span className="pageNumber">/{'    ' + totalPage}ҳ</span>
                    <span className="goPage" onClick={this.handleJumppage}>GO</span>
                </div>
                <div className="switchPage">
                    <span className={lastPage} onClick={this.handleLastpage}></span>
                    <span className={nextPage} onClick={this.handleNextpage}></span>
                </div>
            </div>
        )
    }
});

export default Page;
