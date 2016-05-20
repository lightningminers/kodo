import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 按钮常见有三个操作场景，确定（plain），默认（default），警告或者取消（warn）
 */

const propTypes = {
	component: PropTypes.node,
	size: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool
};

const defaultProps = {
	size: 'normal', // full small
	type: 'btn',
	disabled: false,
	tag: 'button'
};

class Button extends React.Component {

	render() {
		const { type, size, disabled, className, children, href, tag } = this.props;
		const Component = href ? 'a' : tag;
		const defaultClass = type === 'btn' ? type : 'btn-' + type;
		const css = classNames({
			[defaultClass]: true,
			[className]: className,
			'btn-s': size === 'small',
			'full-width btn-m': size === 'full',
			'disabled': disabled
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
