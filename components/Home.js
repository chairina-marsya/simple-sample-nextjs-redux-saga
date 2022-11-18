import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// import ActionCreator from "../redux/actionCreators";

const showHomePhrase = ({ mainPhrase }) => <h2>{mainPhrase}</h2>;

export class HomeScreen extends Component {
  // state = {
  //   languageUser: {},
  // }
  // componentDidMount() {
  //   //   const { languageUser } = this.state;
  //   console.log("--- call init HOME props: ", this.props);
  //   const { dispatch, translate } = this.props;

  //   if (!translate || translate === {}) {
  //     dispatch(ActionCreator.translationRequest("es"));
  //   }
  // }
  render() {
    const { translate } = this.props;
    const translationLoaded =
      (!!translate && translate.translationLoaded) || false;
    const translation = (!!translate && translate.translation) || false;

    console.log("--- Home render props: ", translation);

    const screens = !!translation.translate
      ? translation.translate.screens
      : {};
    const homepage = !!screens ? screens.homepage : {};

    // if (!translationLoaded && !homepage) {
    //   return <div>Loading translation...</div>
    // }

    return (
      <Fragment>
        <h1>miwebsite.com</h1>

        {homepage ? showHomePhrase(homepage) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  translate: state.translate
});

// const mapDispatchToProps = dispatch => ({
//   translRequest: (lang, mode) => dispatch(ActionCreator.translationRequest(lang, mode)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
