/** @flow */

import * as React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

import theme from './theme';

type Props = {
  title: string,
  authors: Array<string>,
  venue: string,
  url: string,
};

export default function Experience(props: Props) {

  let authorsList: Array<React.Node> = [];
  props.authors.forEach((author: string, index: number) => {
    if (author.includes('Cassidy Laidlaw')) {
      authorsList.push(
        <Text style={styles.ownAuthor} key={index}>{author}</Text>
      );
    } else {
      authorsList.push(author);
    }

    if (index === props.authors.length - 1) {
      // don't put anything at end of list
    } else if (index === props.authors.length - 2) {
      if (props.authors.length == 2) {
        authorsList.push(' and ');
      } else {
        authorsList.push(', and ');
      }
    } else {
      authorsList.push(', ');
    }
  });

  let venue: Array<React.Node> | string = props.venue;
  ["oral", "spotlight"].forEach((distinction: string) => {
    if (typeof venue === "string" && venue.endsWith(` (${distinction})`)) {
      venue = venue.replace(` (${distinction})`, '');
      venue = [
        venue,
        <Text style={styles.publicationDistinction} key={distinction}>
          {` (${distinction})`}
        </Text>,
      ];
    }
  });

  return (
    <View style={styles.container} wrap={false}>
      <Text style={theme.fonts.detail.regular}>
        {authorsList}
        {'. '}
        <Link
          style={theme.fonts.body.bold}
          src={props.url}
        >
          {props.title}
        </Link>
        {'. '}
        <Text style={styles.venue}>{venue}</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: theme.spacing.unit,
  },
  ownAuthor: {
    fontFamily: 'Open Sans Bold',
  },
  venue: {
    fontFamily: 'Open Sans Italic',
  },
  publicationDistinction: {
    fontFamily: 'Open Sans Bold Italic',
  },
});
