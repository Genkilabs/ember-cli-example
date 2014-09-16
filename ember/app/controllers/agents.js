import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		save: function(){
			this.model.forEach(function(agent, index, agents){
				if( agent.get('isDirty') ){
					console.log('AgentsController::save: Saving changes to agent', agent.id);
					agent.emberSync.save();
				}
			});
		}
	}
});
