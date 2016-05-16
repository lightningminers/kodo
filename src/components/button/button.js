import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 按钮常见有三个操作场景，确定（plain），默认（default），警告或者取消（warn）
 */

const propTypes = {
	component: PropTypes.node, //	自定义的button组件
	size: PropTypes.string, //	按钮大小
	type: PropTypes.string, //	按钮的类型
	disabled: PropTypes.bool //	是否禁用
};

const defaultProps = {
	size: 'normal',
	type: 'default',
	disabled: false
};

class Button extends React.Component {

	render() {
		const { type, size, disabled, className, component, children } = this.props;
		let Component = component || (this.props.href ? 'a' : 'button');
		let css = classNames({
			kodo_btn: true,
			kodo_btn_primary: type === 'primary',
			kodo_btn_default: type === 'default',
			kodo_btn_plain: type === 'plain',
			kodo_btn_warn: type === 'warn',
			kodo_btn_mini: size === 'small',
			kodo_btn_disabled: disabled,
			[className]: className
		});
		return (
			<Component
				{...this.props}
				className={ css }
			>
				{ children }
			</Component>
		);
	};
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
