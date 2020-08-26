import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  &::-webkit-scrollbar-thumb {
    background: #909bb3; 
    border-radius: 15%;
  }
`

export const Gallery = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0 -1vw;
`