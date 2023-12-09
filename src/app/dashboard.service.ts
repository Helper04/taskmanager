import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary(): any[]
  {
    var TeamMembersSummary = [
      {Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMembersCount: 10, TemporarilyUnavailableMembers: 6},
      {Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMembersCount: 5, TemporarilyUnavailableMembers: 12},
    ];
    return TeamMembersSummary;
  }

}
