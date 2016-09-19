import React, { Component, PropTypes } from 'react';

import Token from './Token';
import Loading from '../Loading';

import styles from './tokens.css';

export default class Tokens extends Component {
  static propTypes = {
    handleAddMeta: PropTypes.func,
    handleUnregister: PropTypes.func,
    handleMetaLookup: PropTypes.func,
    isOwner: PropTypes.bool,
    isLoading: PropTypes.bool,
    tokens: PropTypes.array
  };

  render () {
    const { isLoading, tokens } = this.props;

    let loading = isLoading ? (<Loading size={ 2 } />) : null;

    return (
      <div className={ styles.tokens }>
        { this.renderTokens(tokens) }
        { loading }
      </div>
    );
  }

  renderTokens (tokens) {
    return tokens.map((token, index) => {
      if (!token || !token.tla) return null;

      return (
        <Token
          { ...token }
          handleUnregister={ this.props.handleUnregister }
          handleMetaLookup={ this.props.handleMetaLookup }
          handleAddMeta={ this.props.handleAddMeta }
          key={ index }
          isOwner={ this.props.isOwner } />
      );
    });
  }
}
