import React from 'react';

export default (repos) => {
    if(!repos.length) {
        return (
          <div>
            Not found
          </div>
        )
      }
    return (
        <div>
        {repos.map(repo => {
          return (
          <li>{repo.name}</li>
          );
        })}
      </div>
    );
  };